"use client";

import { useSendMessage } from "@/entities";
import { LOCAL_STORAGE } from "@/shared";
import { SubmitHandler, useForm } from "react-hook-form";
import { sendFormSrategies } from "../model/sendFormStrategies";
import {
  IDialodForm,
  TDialogFormInputType,
} from "../model/dialog-form-interface";

export const useDialogSendForm = (
  chatId: number,
  dialog: string,
  onDeleteVoice: () => void,
  onDeletePhoto: () => void
) => {
  const { handleSubmit, reset, register, control, watch } =
    useForm<IDialodForm>();

  const { metateMessage, isPendingSendMessage } = useSendMessage(
    chatId,
    dialog
  );

  const onFormSubmut: SubmitHandler<IDialodForm> = async (data) => {
    let type: TDialogFormInputType = null;

    if (data.text && data.text.length > 0) {
      type = "text";
    }
    if (data.photo && data.photo.length > 0) {
      type = "photo";
    }
    if (data.voise) {
      type = "voice";
    }

    if (!type) {
      return;
    }

    onDeleteVoice();
    onDeletePhoto();

    const messagePayload = await sendFormSrategies[type](data);

    if (!messagePayload) return;

    metateMessage({
      ...messagePayload,
      sender: Number(localStorage.getItem(LOCAL_STORAGE.userId)),
      chat: chatId,
    });

    reset();
  };

  return {
    onSubmit: handleSubmit(onFormSubmut),
    register,
    control,
    reset,
    watch,
  };
};
