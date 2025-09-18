"use client";

import { MicIcon, Paperclip, Send, StopCircle, Trash2 } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useDialogSendForm } from "../hook/useDialogSendForm";
import { AudioPlayer, FileField, IconButton, Text, usePreview } from "@/shared";
import { useVoiceRecorder } from "@/features";
import { Timer } from "@/shared";
import { DialogFormInput } from "./dialog.form.input";
import { Controller } from "react-hook-form";
import { AvatarSquare } from "@/entities";

export const DialogForm = ({
  chatId,
  dialog,
  scrollToBottom,
  onMessage,
}: {
  chatId: number;
  dialog: string;
  scrollToBottom: (variant: ScrollBehavior) => void;
  onMessage: (isTyping: boolean) => void;
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const inputFile = useId();

  const {
    url,
    recordingStatus,
    audiBlob,
    duration,
    onStartRecording,
    onStopRecording,
    onDeleteAutio,
  } = useVoiceRecorder();

  const [photoURL, setPhotoURL] = useState<string | null>(null);
  const [fromStatus, setFormStatus] = useState<
    "idle" | "recording" | "stopped" | "photo"
  >("idle");

  const onDeletePhoto = () => {
    setFormStatus("idle");
  };

  const { onSubmit, register, reset, control, watch } = useDialogSendForm(
    chatId,
    dialog,
    onDeleteAutio,
    onDeletePhoto
  );

  usePreview(watch("photo"), setPhotoURL);

  useEffect(() => {
    setFormStatus(recordingStatus);
  }, [recordingStatus]);

  useEffect(() => {
    console.log("dsa");
    if (photoURL) {
      console.log("dsa2");

      setFormStatus("photo");
    }
  }, [photoURL]);

  const hendleClick = () => {
    scrollToBottom("smooth");
  };

  const onInput = () => {
    onMessage(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      onMessage(false);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      onMessage(false);
    };
  }, []);

  return (
    <form
      onSubmit={onSubmit}
      className="bg-[var(--white)] min-h-16 flex gap-4 px-5 items-center"
    >
      <label htmlFor={inputFile} className=" cursor-pointer">
        <Paperclip stroke="var(--black)" />
        <FileField id={inputFile} {...register("photo")} />
      </label>

      {
        {
          idle: (
            <>
              <DialogFormInput {...register("text")} onInput={onInput} />

              <IconButton
                icon={<MicIcon stroke="var(--black)" />}
                onClick={onStartRecording}
                type={"button"}
              />
            </>
          ),
          recording: (
            <>
              <div className="w-full flex justify-between items-center px-5 bg-[var(--primery-light)] h-9 py-1 rounded-2xl animate-pulse">
                <Text text="Recording..." />
                <Timer />
              </div>
              <Controller
                name="voise"
                control={control}
                render={({ field }) => (
                  <IconButton
                    icon={<StopCircle stroke="var(--red)" />}
                    onClick={() => {
                      onStopRecording();
                      field.onChange({
                        blob: audiBlob,
                        duration: duration,
                      });
                    }}
                    type={"button"}
                  />
                )}
              />
            </>
          ),
          stopped: (
            <>
              <AudioPlayer src={url} duration={duration.current} />
              <IconButton
                icon={<Trash2 stroke="var(--black)" />}
                onClick={() => {
                  onDeleteAutio();
                  setFormStatus("idle");
                  reset();
                }}
                type={"button"}
              />
            </>
          ),
          photo: (
            <div className="w-full flex py-2 justify-between items-center">
              <div className="size-40">
                <AvatarSquare url={photoURL!} />
              </div>
              <IconButton
                icon={<Trash2 stroke="var(--black)" />}
                onClick={() => {
                  setFormStatus("idle");
                  reset();
                }}
                type={"button"}
              />
            </div>
          ),
        }[fromStatus]
      }

      <IconButton
        type="submit"
        icon={<Send stroke="var(--black)" />}
        onClick={hendleClick}
      />
    </form>
  );
};
