"use client";

import { RefObject, useCallback, useEffect, useRef } from "react";
import { iceServers } from "../config/iceServers";
import { LOCAL_STORAGE, useSocket, useStateWithCallback } from "@/shared";
import { SOCKET_ACTIONS } from "../config/socket-actions";

const LOCAL_VIDEO = "LOCAL_VIDEO";

export const useWebRTC = (roomId: string) => {
  const [clients, setClient] = useStateWithCallback<string[]>([]);

  const peerConnections = useRef<Record<string, RTCPeerConnection>>({});
  const peerMediaElements = useRef<Record<string, HTMLVideoElement | null>>({
    [LOCAL_VIDEO]: null,
  });
  const localMediaStream = useRef<MediaStream | null>(null);

  const userId = localStorage.getItem(LOCAL_STORAGE.userDocumentId);

  const socket = useSocket(userId);

  const addNewCleien = useCallback(
    (newClient: string, cb: () => void) => {
      if (!clients.includes(newClient)) {
        setClient((list) => [...list, newClient], cb);
      }
    },
    [clients, setClient]
  );

  const startCapture = async () => {
    localMediaStream.current = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: {
        width: 1280,
        height: 720,
      },
    });

    addNewCleien(LOCAL_VIDEO, () => {
      const localVideoElement = peerMediaElements.current[LOCAL_VIDEO];

      if (localVideoElement) {
        localVideoElement.srcObject = localMediaStream.current;
      }
    });
  };

  const stopCapture = () => {
    localMediaStream.current?.getTracks().forEach((element) => {
      element.stop();
    });
  };

  const createNewPeer = async ({
    peerId,
    isCreateOffer,
  }: {
    peerId: string;
    isCreateOffer: boolean;
  }) => {
    if (peerId in peerConnections.current) {
      return console.log(`already connected to pper ${peerId}`);
    }

    peerConnections.current[peerId] = new RTCPeerConnection({
      iceServers: iceServers,
    });

    peerConnections.current[peerId].onicecandidate = (ice) => {
      if (ice.candidate) {
        socket.emit(SOCKET_ACTIONS.RELAY_ICE, {
          peerId,
          iceCandidate: ice.candidate,
        });
      }
    };

    let tracksNumber = 0;
    peerConnections.current[peerId].ontrack = ({ streams: [remoteStream] }) => {
      tracksNumber++;

      if (tracksNumber === 2) {
        addNewCleien(peerId, () => {
          if (peerMediaElements.current[peerId]) {
            peerMediaElements.current[peerId].srcObject = remoteStream;
          }
        });
      }
    };

    if (localMediaStream.current) {
      //
      localMediaStream.current.getTracks().forEach((track) => {
        // ругается без двтойной проверки
        if (localMediaStream.current) {
          peerConnections.current[peerId].addTrack(
            track,
            localMediaStream.current
          );
        }
        //
      });
      //
    }

    if (isCreateOffer) {
      const offer = await peerConnections.current[peerId].createOffer();

      await peerConnections.current[peerId].setLocalDescription(offer);

      socket.emit(SOCKET_ACTIONS.RELAY_SDP, {
        peerId,
        sessionDescription: offer,
      });
    }
  };

  const setRemoteMedia = async ({
    peerId,
    sessionDescription,
  }: {
    peerId: string;
    sessionDescription: RTCSessionDescriptionInit;
  }) => {
    const connection = peerConnections.current[peerId];
    if (!connection) return console.warn("no connection for", peerId);

    const desc = new RTCSessionDescription(sessionDescription);
    const isOffer = desc.type === "offer";
    const currentSignaling = connection.signalingState;

    if (!connection.remoteDescription && currentSignaling === "stable") {
      await connection.setRemoteDescription(desc);
    }

    if (isOffer) {
      const answer = await connection.createAnswer();
      await connection.setLocalDescription(answer);

      socket.emit(SOCKET_ACTIONS.RELAY_SDP, {
        peerId,
        sessionDescription: answer,
      });
    } else {
      if (currentSignaling !== "stable" && !connection.remoteDescription) {
        await connection.setRemoteDescription(desc);
      }
    }
  };

  useEffect(() => {
    socket.on(SOCKET_ACTIONS.ADD_PEER, createNewPeer);
  }, []);

  useEffect(() => {
    // socket.on(SOCKET_ACTIONS.SESSION_DESCRIPTION, setRemoteMedia);
    socket.on(SOCKET_ACTIONS.SESSION_DESCRIPTION, (data) => {
      console.log(
        "SESSION_DESCRIPTION from",
        data.peerId,
        data.sessionDescription.type
      );
      setRemoteMedia(data);
    });
  }, []);

  useEffect(() => {
    socket.on(SOCKET_ACTIONS.ICE_CANDIDATE, ({ peerId, iceCandidate }) => {
      peerConnections.current[peerId].addIceCandidate(
        new RTCIceCandidate(iceCandidate)
      );
    });
  }, []);

  useEffect(() => {
    socket.on(SOCKET_ACTIONS.REMOVE_PEER, ({ peerId }) => {
      if (peerConnections.current[peerId]) {
        peerConnections.current[peerId].close();
      }

      delete peerConnections.current[peerId];
      delete peerMediaElements.current[peerId];

      stopCapture();
      setClient((list: any) => list.filter((c: any) => c !== peerId));
    });
  }, []);

  useEffect(() => {
    startCapture().then(() => socket.emit(SOCKET_ACTIONS.JOIN, { roomId }));
  }, []);

  const provideMediaRef = useCallback(
    (clientId: string, video: HTMLVideoElement | null) => {
      // console.log(clientId);
      peerMediaElements.current[clientId] = video;
    },
    []
  );

  return { clients, provideMediaRef };
};
