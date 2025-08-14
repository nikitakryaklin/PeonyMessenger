"use client";

import { ReactNode } from "react";
import { DialogForm } from "./dialog.form";
import { DialogMessages } from "./dialog.messages";
import { useScrollToBottom } from "../hook/useScrollToBottom";

export const DialogContainer = ({
  header,
  dialogId,
  params,
  type,
}: {
  header: ReactNode;
  dialogId: number;
  params: string;
  type: "chat" | "group";
}) => {
  const { meessagesFildRef, scrollToBottom } = useScrollToBottom();

  return (
    <div className="flex flex-col h-full">
      {header}
      <div className=" pb-3 flex-1 flex flex-col justify-end max-h-5/6 relative">
        <DialogMessages Ref={meessagesFildRef} type={type} params={params} />
      </div>
      <DialogForm chatId={dialogId} scrollToBottom={scrollToBottom} />
    </div>
  );
};
