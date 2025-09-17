"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const useAudioPlayer = (src: string, duration: number) => {
  const [isPlaying, setIsPlaying] = useState(false);
  //   const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // const onLoadedMetaData = () => setDuration(audio.duration || 0);
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onEnded = () => setIsPlaying(false);

    // audio.addEventListener("loadedmetadata", onLoadedMetaData);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    return () => {
      //   audio.removeEventListener("loadedmetadata", onLoadedMetaData);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, [src]);

  const onTogglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.warn("Audio play failed", error);
      setIsPlaying(false);
    }
  }, []);

  const onProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;

    if (!progressRef.current || !audio || !duration) return;
    const rect = progressRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, x / rect.width));

    audio.currentTime = ratio * duration;
    setCurrentTime(audio.currentTime);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let raf: number;

    const tick = () => {
      setCurrentTime(audio.currentTime);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const progressPercent = (currentTime / duration) * 100;
  const timer = duration - currentTime;

  return {
    state: {
      isPlaying,
      onTogglePlay,
    },
    ref: {
      audioRef,
      progressRef,
    },
    progress: {
      progressPercent,
      timer,
      onProgress,
    },
  };
};
