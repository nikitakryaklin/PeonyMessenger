"use client";

import { useSendMessage } from "@/entities";
import { TTypeMessage } from "@/entities/message/model/massage-interface";
import { LOCAL_STORAGE, uploadFilesService } from "@/shared";
import { number } from "motion";
import { dialog } from "motion/react-client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IDialodForm {
  message?: string;
  voise?: { blob: { current: Blob }; duration: number } | null;
}

export const useDialogForm = (
  chatId: number,
  dialog: string,
  onDeleteVois: () => void
) => {
  const { handleSubmit, reset, register, control } = useForm<IDialodForm>();

  const [url, setURL] = useState("");
  const [type, setType] = useState<TTypeMessage>("text");

  const { metateMessage, isPendingSendMessage } = useSendMessage(
    chatId,
    dialog
  );

  const onFormSubmut: SubmitHandler<IDialodForm> = async (data) => {
    if (data.voise) {
      const formData = new FormData();
      const file = new File([data.voise.blob.current], "voice-message.webm", {
        type: data.voise.blob.current.type,
      });
      formData.append("files", file);
      const voiceMessage = await uploadFilesService(formData);
      onDeleteVois();
      const url = await voiceMessage[0].url;
      metateMessage({
        massage: JSON.stringify({ url: url, duration: data.voise.duration }),
        sender: Number(localStorage.getItem(LOCAL_STORAGE.userId)),
        type: "voice",
        chat: chatId,
      });
    }
    if (data.message && data.message.length > 0) {
      metateMessage({
        massage: data.message,
        sender: Number(localStorage.getItem(LOCAL_STORAGE.userId)),
        type: "text",
        chat: chatId,
      });
    }
    reset();
  };

  return { onSubmit: handleSubmit(onFormSubmut), register, control, reset };
};
