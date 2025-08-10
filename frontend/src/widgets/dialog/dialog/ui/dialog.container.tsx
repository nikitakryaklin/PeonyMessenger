import { ReactNode } from "react";
import { DialogForm } from "./dialog.form";
import {
  AvatarCircle,
  MessageContainer,
  TChatMessange,
  TGroupMessange,
} from "@/entities";
import { LOCAL_STORAGE } from "@/shared";

export const DialogContainer = ({
  header,
  dialogId,
  messages,
}: {
  header: ReactNode;
  dialogId: string;
  messages: TChatMessange[] | undefined;
}) => {
  // const render = {
  //     chat: () => (
  //         <>{messages?.map(message => <MessageContainer text={message.massange}
  //             isIncoming={localStorage.getItem(LOCAL_STORAGE.userDocumentId) !== message.sender.documentId} /> )}</>
  //     ),
  //     group: () => (
  //         <>{messages?.map((message as TGroupMessange) => <MessageContainer text={message.massange}
  //             isIncoming={localStorage.getItem(LOCAL_STORAGE.userDocumentId) !== message.sender.documentId} /> )}</>
  //     )
  // }

  console.log(messages);
  return (
    <div className="flex flex-col h-full">
      {header}
      <div className="px-5 pb-2 flex flex-col flex-1 overflow-y-scroll gap-4 bg-amber-100 justify-end">
        {messages &&
          messages?.map((message) => (
            <MessageContainer
              text={message.massange}
              isIncoming={
                localStorage.getItem(LOCAL_STORAGE.userDocumentId) !==
                message.sender.documentId
              }
            />
          ))}
      </div>
      <DialogForm />
    </div>
  );
};
