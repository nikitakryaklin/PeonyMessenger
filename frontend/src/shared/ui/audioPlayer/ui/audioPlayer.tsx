"use client";
import { AudioLines, Pause, Play } from "lucide-react";
import { HTMLProps, useCallback, useEffect, useRef, useState } from "react";
import { IconButton } from "../../button/IconButton";
import { SubText } from "../../text";
import { timeformat } from "@/shared/lib/format/timerFormat";
import { useAudioPlayer } from "../hook/useAudioPlayer";

export function AudioPlayer({
  src,
  duration,
}: {
  src: string;
  duration: number;
}) {
  const { state, ref, progress } = useAudioPlayer(src, duration);

  return (
    <div className="w-full h-11 flex items-center gap-2">
      <audio
        ref={ref.audioRef}
        src={src}
        className="w-full"
        hidden
        autoPlay={false}
      />

      <IconButton
        type="button"
        icon={
          state.isPlaying ? (
            <Pause fill="var(--black)" stroke="var(--black)" />
          ) : (
            <Play fill="var(--black)" stroke="var(--black)" />
          )
        }
        onClick={state.onTogglePlay}
        className="h-full aspect-square rounded-full bg-[var(--primery)]"
      />
      <div
        ref={ref.progressRef}
        onClick={progress.onProgress}
        className="w-full min-w-44 h-4/5 bg-[var(--primery-light)] flex px-5 py-1 rounded-2xl items-center justify-between transition-colors duration-150"
        style={{
          background: `linear-gradient(90deg, var(--primery) ${progress.progressPercent}%, var(--primery-light) 0%)`,
        }}
      >
        <div className="flex">
          <AudioLines fill="var(--white)" stroke="var(--black)" />
          <AudioLines fill="var(--white)" stroke="var(--black)" />
          <AudioLines fill="var(--white)" stroke="var(--black)" />
        </div>
        <SubText
          text={timeformat(progress.timer)}
          className="text-[var(--black)]"
        />
      </div>
    </div>
  );
}
