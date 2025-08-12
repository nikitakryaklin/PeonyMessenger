"use client";

import { useSendMessage } from "@/entities";
import { LOCAL_STORAGE } from "@/shared";
import { SubmitHandler, useForm } from "react-hook-form";

export const useDialogForm = (chatId: number) => {
  const { handleSubmit, reset, register } = useForm<{ message: string }>();

  const { metateMessage, isPendingSendMessage } = useSendMessage(chatId);

  const onFormSubmut: SubmitHandler<{ message: string }> = (data) => {
    metateMessage({
      massage: data.message,
      sender: Number(localStorage.getItem(LOCAL_STORAGE.userId)),
      chat: chatId,
    });
    reset();
  };

  return { onsubmit: handleSubmit(onFormSubmut), register };
};
