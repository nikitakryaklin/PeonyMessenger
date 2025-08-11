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
  type,
  messages,
}: {
  header: ReactNode;
  dialogId: number;
  type: "chat" | "group";
  messages: (TChatMessange[] & TGroupMessange[]) | undefined;
}) => {
  return (
    <div className="flex flex-col h-full">
      {header}
      <div className="px-5 pb-2 flex flex-col flex-1 overflow-y-scroll gap-4 bg-amber-100 justify-end relative">
        {(!messages || messages.length === 0) && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[var(--white)] px-3 py-1 rounded-xl">
              Whire first message!
            </div>
          </div>
        )}
        {
          {
            chat: (
              <>
                {messages?.map((message: TChatMessange) => (
                  <MessageContainer
                    key={message.documentId}
                    text={message.massange}
                    isIncoming={
                      localStorage.getItem(LOCAL_STORAGE.userDocumentId) !==
                      message.sender.documentId
                    }
                  />
                ))}
              </>
            ),
            group: (
              <>
                {messages?.map((message: TGroupMessange) => (
                  <MessageContainer
                    key={message.documentId}
                    text={message.massange}
                    info={{
                      avatar: (
                        <AvatarCircle
                          url={message.sender.about?.avatar?.[0].url}
                        />
                      ),
                      title: message.sender.username,
                    }}
                    isIncoming={
                      localStorage.getItem(LOCAL_STORAGE.userDocumentId) !==
                      message.sender.documentId
                    }
                  />
                ))}
              </>
            ),
          }[type]
        }
      </div>
      <DialogForm chatId={dialogId} />
    </div>
  );
};
