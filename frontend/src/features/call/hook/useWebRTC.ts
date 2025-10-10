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
        setClient([...clients, newClient], cb);
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
        localVideoElement.volume = 0;
        localVideoElement.srcObject = localMediaStream.current;
      }
    });
  };

  const stopCapture = () => {
    localMediaStream.current?.getTracks().forEach((element) => {
      element.stop();
    });
  };

  useEffect(() => {
    startCapture().then(() => socket.emit(SOCKET_ACTIONS.JOIN, { roomId }));

    return () => stopCapture();
  }, []);

  const provideMediaRef = useCallback(
    (clientId: string, video: HTMLVideoElement | null) => {
      peerMediaElements.current[clientId] = video;
    },
    []
  );

  return { clients, provideMediaRef };
};
