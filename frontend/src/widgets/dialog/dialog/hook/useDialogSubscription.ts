import { LOCAL_STORAGE, useSocket } from "@/shared";
import { useEffect, useState } from "react";
import { TInputStatus } from "../model/dialog-form-interface";

export const useDialogSubscription = (dialog: string) => {
  const [inputServerStatus, setInputServerStatus] =
    useState<TInputStatus>("idle");
  const [inputLocalStatus, setInputLocalStatus] =
    useState<TInputStatus>("idle");

  const socket = useSocket();

  const onInput = (status: TInputStatus) => {
    setInputLocalStatus((prev) => (prev === status ? prev : status));
  };

  useEffect(() => {
    socket.emit("status", { dialog: dialog, status: inputLocalStatus });
  }, [inputLocalStatus]);

  useEffect(() => {
    socket.emit("join", {
      dialog: dialog,
      userId: localStorage.getItem(LOCAL_STORAGE.userId)?.toString(),
    });

    socket.on("status", (status) => {
      setInputServerStatus(status.status);
    });

    return () => {
      socket.off("message");
      socket.off("startTyping");
      socket.off("endTyping");

      socket.emit("leaveFromDialog", { dialog: dialog });
    };
  }, [socket, dialog]);

  return { inputServerStatus, onInput };
};
