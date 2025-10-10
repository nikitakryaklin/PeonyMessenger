"use client";

import { useEffect, useRef } from "react";

export const useCapture = () => {
  const localMediaStream = useRef<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const startCapture = async () => {
    localMediaStream.current = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: {
        width: 1280,
        height: 720,
      },
    });

    if (videoRef.current) {
      videoRef.current.srcObject = localMediaStream.current;
    }
  };

  const stopCapture = () => {
    localMediaStream.current?.getTracks().forEach((element) => {
      element.stop();
    });
  };

  useEffect(() => {
    startCapture();

    return () => stopCapture();
  }, []);

  return { localMediaStream, videoRef };
};
