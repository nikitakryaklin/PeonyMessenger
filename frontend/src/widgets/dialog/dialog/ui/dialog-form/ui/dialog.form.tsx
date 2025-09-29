"use client";

import { MicIcon, Send } from "lucide-react";
import { useEffect, useRef } from "react";
import { useDialogSendForm } from "../../../hook/useDialogSendForm";
import { IconButton, usePreview } from "@/shared";
import { useVoiceRecorder } from "@/features";
import { DialogFormText } from "./dialog-form-text";
import { DialogFormFile } from "./dialog-from-file";
import { DialogFormRecording } from "./dialog-form-recording";
import { DialogFormVoice } from "./dialog-form-voice";
import { DialogFromPhoto } from "./dialog-from-photo";
import { useDialogForm } from "../hook/useDialogForm";
import { TInputStatus } from "../../../model/dialog-form-interface";

export const DialogForm = ({
  chatId,
  dialog,
  setInputStatus,
}: {
  chatId: number;
  dialog: string;
  setInputStatus: (status: TInputStatus) => void;
}) => {
  const {
    photoURL,
    formStatus,
    setPhotoURL,
    setFormStatus,
    setFormIdleStatus,
  } = useDialogForm();

  const {
    audioUrl,
    recordingStatus,
    audioBlob,
    duration,
    onStartRecording,
    onStopRecording,
    onDeleteAudio,
  } = useVoiceRecorder();

  const { onSubmit, register, reset, control, watch } = useDialogSendForm(
    chatId,
    dialog,
    onDeleteAudio,
    setFormIdleStatus
  );

  const onSetPhotoUrl = (url: string | null) => {
    setPhotoURL(url);
    setInputStatus("idle");
  };

  usePreview(watch("photo"), onSetPhotoUrl);

  useEffect(() => {
    setFormStatus(recordingStatus);
  }, [recordingStatus]);

  return (
    <form
      onSubmit={onSubmit}
      className="bg-[var(--white)] min-h-16 flex  md:gap-4 px-2 md:px-5 py-2 items-end "
    >
      {
        {
          idle: (
            <>
              <DialogFormFile
                {...register("photo")}
                setInputStatus={setInputStatus}
              />
              <DialogFormText
                {...register("text")}
                setInputStatus={setInputStatus}
              />

              <IconButton
                icon={<MicIcon stroke="var(--black)" />}
                onClick={() => {
                  onStartRecording(), setInputStatus("recording");
                }}
                type={"button"}
              />
            </>
          ),
          recording: (
            <DialogFormRecording
              control={control}
              duration={duration}
              audioBlob={audioBlob}
              onStopRecording={() => {
                onStopRecording(), setInputStatus("idle");
              }}
            />
          ),
          stopped: (
            <DialogFormVoice
              url={audioUrl}
              duration={duration}
              deleteAudio={onDeleteAudio}
              setFormStatus={setFormIdleStatus}
              reset={reset}
            />
          ),
          photo: (
            <DialogFromPhoto
              photoURL={photoURL}
              setFormStatus={setFormIdleStatus}
              reset={reset}
            />
          ),
        }[formStatus]
      }

      <IconButton type="submit" icon={<Send stroke="var(--black)" />} />
    </form>
  );
};
