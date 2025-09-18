"use client";

import { ReactNode } from "react";
import { DialogForm } from "./dialog.form";
import { DialogMessages } from "./dialog.messages";
import { useScrollToBottom } from "../hook/useScrollToBottom";
import { SubText } from "@/shared";
import { DialogHeader } from "./dialog.header";
import { TParticipants } from "../model/dialog-interface";
import { useDialogSubscription } from "../hook/useDialogSubscription";

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
    description: string | "";
    options: ReactNode;
  };
  participants: TParticipants;
  dialogId: number;
  params: string;
  type: "chat" | "group";
}) => {
  const { meessagesFildRef, scrollToBottom } = useScrollToBottom();

  const { onMessage, isTypingServer } = useDialogSubscription(params);

  return (
    <div className="flex flex-col h-full">
      <DialogHeader
        info={{
          avatar: headerInfo.avatar,
          title: headerInfo.title,
          description: (
            <SubText
              text={isTypingServer ? "typing..." : headerInfo.description}
            />
          ),
        }}
        actions={headerInfo.options}
      />

      <div className=" pb-3 flex-1 flex flex-col justify-end max-h-5/6 relative">
        <DialogMessages
          Ref={meessagesFildRef}
          type={type}
          params={params}
          participants={participants}
        />
      </div>

      <DialogForm
        chatId={dialogId}
        dialog={params}
        scrollToBottom={scrollToBottom}
        onMessage={onMessage}
      />
    </div>
  );
};
