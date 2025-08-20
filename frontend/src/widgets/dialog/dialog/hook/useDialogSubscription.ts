import { LOCAL_STORAGE, useSocket } from "@/shared";
import { useEffect, useState } from "react";

export const useDialogSubscription = (dialog: string) => {
  const [isTypingLocal, setIsTypingLocal] = useState<boolean>(false);
  const [isTypingServer, setIsTypingServer] = useState<boolean>(false);

  const socket = useSocket();

  const onMessage = (isTyping: boolean) => {
    setIsTypingLocal((prev) => (prev === isTyping ? prev : isTyping));
  };

  useEffect(() => {
    if (isTypingLocal === true) {
      socket.emit("startTyping", { dialog: dialog });
    }

    if (isTypingLocal === false) {
      socket.emit("endTyping", { dialog: dialog });
    }
  }, [isTypingLocal]);

  useEffect(() => {
    socket.emit("join", {
      dialog: dialog,
      userId: localStorage.getItem(LOCAL_STORAGE.userId)?.toString(),
    });

    socket.on("startTyping", () => {
      setIsTypingServer(true);
    });

    socket.on("endTyping", () => {
      setIsTypingServer(false);
    });

    return () => {
      socket.off("message");
      socket.off("startTyping");
      socket.off("endTyping");

      socket.emit("leaveFromDialog", { dialog: dialog });
    };
  }, [socket, dialog]);

  return { isTypingServer, onMessage };
};
