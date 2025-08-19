"use client";

import { ReactNode, useEffect, useState } from "react";
import { DialogForm } from "./dialog.form";
import { DialogMessages } from "./dialog.messages";
import { useScrollToBottom } from "../hook/useScrollToBottom";
import { io } from "socket.io-client";
import { LOCAL_STORAGE, SubText } from "@/shared";
import { useQueryClient } from "@tanstack/react-query";
import { DialogHeader } from "./dialog.header";
import { TParticipants } from "../model/dialog-interface";
import { TMessage, useMessageGetByChatId } from "@/entities";

const soket = io("http://localhost:4000");

export const DialogContainer = ({
  headerInfo,
  dialogId,
  params,
  type,
  participants,
}: {
  headerInfo: {
    avatar: string;
    title: string;
    options: ReactNode;
  };
  participants: TParticipants;
  dialogId: number;
  params: string;
  type: "chat" | "group";
}) => {
  const { meessagesFildRef, scrollToBottom } = useScrollToBottom();

  const queryClient = useQueryClient();
  const [isTypingLocal, setIsTypingLocal] = useState<boolean>(false);
  const [isTypingServer, setIsTypingServer] = useState<boolean>(false);
  const { messages: messageBD } = useMessageGetByChatId(params);
  const [messages, setMessages] = useState<any[]>([]);

  // useEffect(() => {
  //   if (messageBD) {
  //     setMessages(messageBD);
  //   }
  // }, [messageBD]);

  const sendMessage = (message: { message: string }) => {
    soket.emit("message", {
      dialog: params,
      massage: message.message,
      createdAt: new Date().toISOString(),
      documentId: Date.now().toString(),
      sender: {
        documentId: localStorage
          .getItem(LOCAL_STORAGE.userDocumentId)
          ?.toString(),
      },
    });
  };

  const onMessage = (isTyping: boolean) => {
    setIsTypingLocal((prev) => (prev === isTyping ? prev : isTyping));
  };

  useEffect(() => {
    if (isTypingLocal === true) {
      soket.emit("startTyping", { dialog: params });
    }

    if (isTypingLocal === false) {
      soket.emit("endTyping", { dialog: params });
    }
  }, [isTypingLocal]);

  useEffect(() => {
    soket.emit("join", {
      dialog: params,
      userId: localStorage.getItem(LOCAL_STORAGE.userId)?.toString(),
    });
  }, [params]);

  useEffect(() => {
    soket.on("message", ({ data }: any) => {
      console.log(data.documentId);
      setMessages((prev) => {
        // if (prev.find((m) => m.documentId === data.documentId)) return prev;
        return [data, ...prev];
      });
    });

    // queryClient.invalidateQueries({ queryKey: ["message", params] });
    soket.on("startTyping", () => {
      setIsTypingServer(true);
    });

    soket.on("endTyping", () => {
      setIsTypingServer(false);
    });

    return () => {
      soket.off("message");
      soket.off("startTyping");
      soket.off("endTyping");

      soket.emit("leaveFromDialog", { dialog: params });
    };
  }, [soket, params]);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <DialogHeader
        info={{
          avatar: headerInfo.avatar,
          title: headerInfo.title,
          description: <SubText text={isTypingServer ? "typing..." : ""} />,
        }}
        actions={headerInfo.options}
      />

      <div className=" pb-3 flex-1 flex flex-col justify-end max-h-5/6 relative">
        <DialogMessages
          Ref={meessagesFildRef}
          type={type}
          params={params}
          participants={participants}
          messages={messages}
        />
      </div>
      <DialogForm
        chatId={dialogId}
        scrollToBottom={scrollToBottom}
        sendMessage={sendMessage}
        onMessage={onMessage}
      />
    </div>
  );
};
