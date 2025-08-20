"use client";

import { useSendMessage } from "@/entities";
import { LOCAL_STORAGE } from "@/shared";
import { dialog } from "motion/react-client";
import { SubmitHandler, useForm } from "react-hook-form";

export const useDialogForm = (chatId: number, dialog: string) => {
  const { handleSubmit, reset, register } = useForm<{ message: string }>();

  const { metateMessage, isPendingSendMessage } = useSendMessage(
    chatId,
    dialog
  );

  const onFormSubmut: SubmitHandler<{ message: string }> = (data) => {
    metateMessage({
      massage: data.message,
      sender: Number(localStorage.getItem(LOCAL_STORAGE.userId)),
      chat: chatId,
    });
    reset();
  };

  return { onSubmit: handleSubmit(onFormSubmut), register };
};
