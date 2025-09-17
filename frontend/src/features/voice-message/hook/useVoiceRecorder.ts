"use client";
import { useRef, useState } from "react";

type TRecording = "idle" | "recording" | "stopped";

export function useVoiceRecorder() {
  const [url, setUrl] = useState("");
  const [recordingStatus, setRecordingStatus] = useState<TRecording>("idle");
  const mediaRecorderRef = useRef<MediaRecorder>(null);
  const audiChanks = useRef<Blob[]>([]);
  const audiBlob = useRef<Blob>(null);
  const duration = useRef<number>(0);

  const onStartRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
    mediaRecorderRef.current = mediaRecorder;

    audiChanks.current = [];

    mediaRecorder.ondataavailable = (e) => {
      audiChanks.current.push(e.data);
    };

    mediaRecorder.onstop = async () => {
      const blob = new Blob(audiChanks.current, { type: "audio/webm" });
      const audioUrl = URL.createObjectURL(blob);

      const audio = new Audio();
      audio.preload = "metadata";

      const durationAudio = await new Promise<number>((resolve) => {
        audio.addEventListener(
          "loadedmetadata",
          () => resolve(audio.duration),
          { once: true }
        );
        audio.src = audioUrl; // важно: src ставим после listener
        audio.load();
      });

      duration.current = durationAudio;
      audiBlob.current = blob;
      setUrl(audioUrl);
      setRecordingStatus("stopped");
    };

    mediaRecorder.start();
    setRecordingStatus("recording");
  };

  const onStopRecording = () => {
    mediaRecorderRef.current?.stop();
  };

  const onDeleteAutio = () => {
    audiChanks.current = [];
    audiBlob.current = null;
    setUrl("");
    setRecordingStatus("idle");
  };

  return {
    url,
    recordingStatus,
    audiBlob,
    duration,
    onStartRecording,
    onStopRecording,
    onDeleteAutio,
  };
}
