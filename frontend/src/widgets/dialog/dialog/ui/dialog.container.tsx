"use client";

import { ReactNode, useEffect } from "react";
import { DialogForm } from "./dialog.form";
import { DialogMessages } from "./dialog-messages/ui/dialog.messages";
import { SubText } from "@/shared";
import { DialogHeader } from "./dialog.header";
import { useDialogSubscription } from "../hook/useDialogSubscription";
import { useAdaptive } from "@/shared";
// import { unstable_ViewTransition as ViewTransition } from "react";

export const DialogContainer = ({
  headerInfo,
  dialogId,
  params,
  type,
}: {
  headerInfo: {
    avatar: string;
    title: string;
    description: string | "";
    options: ReactNode;
  };
  dialogId: number;
  params: string;
  type: "chat" | "group";
}) => {
  const { onMessage, isTypingServer } = useDialogSubscription(params);

  const { setCurrentPage } = useAdaptive();

  useEffect(() => {
    setCurrentPage("dialog");
  }, []);

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

      <div className=" pb-3 flex-1 flex flex-col justify-end relative overflow-hidden">
        <DialogMessages type={type} params={params} />
      </div>

      <DialogForm chatId={dialogId} dialog={params} onMessage={onMessage} />
    </div>
  );
};
