import {
  AvatarCircle,
  MessageContainer,
  TMessage,
  useMessageGetByChatId,
  useMessageSubscription,
} from "@/entities";
import { Loader, LOCAL_STORAGE, Stub, useIntersection } from "@/shared";
import { RefObject } from "react";
import { TParticipants } from "../model/dialog-interface";

export function DialogMessages({
  type,
  Ref,
  params,
  participants,
}: {
  type: "chat" | "group";
  Ref: RefObject<HTMLDivElement | null>;
  params: string;
  participants: TParticipants;
}) {
  const { isPendingMessage, nextPage } = useMessageGetByChatId(params);
  const { messages } = useMessageGetByChatId(params);

  const nextPagefetchNextPage = (e: any) => {
    nextPage.fetchNextPage();
  };
  const observerRef = useIntersection(nextPagefetchNextPage);

  useMessageSubscription(params);

  const senderInfo = (id: string) => {
    const sender = participants.filter((p) => p.documentId === id);

    return {
      avatar: sender[0].about?.avatar?.[0].url,
      userName: sender[0].username,
    };
  };

  if (isPendingMessage) {
    return <Loader color="#999" />;
  }

  if (!messages || messages.length === 0) {
    return <Stub text="Whire first message!" />;
  }

  return (
    <div
      ref={Ref}
      className="flex flex-col-reverse overflow-y-auto max-h-full px-5"
    >
      {
        {
          chat: (
            <>
              {messages?.map((message, idx) => (
                <MessageContainer
                  key={message.documentId}
                  text={message.massage}
                  createdAt={message.createdAt}
                  isIncoming={
                    localStorage.getItem(LOCAL_STORAGE.userDocumentId) !==
                    message.sender.documentId
                  }
                  {...(idx === messages.length - 3 && { Ref: observerRef })}
                />
              ))}
            </>
          ),
          group: (
            <>
              {messages?.map((message, idx) => (
                <MessageContainer
                  key={message.documentId}
                  text={message.massage}
                  createdAt={message.createdAt}
                  info={{
                    avatar: (
                      <AvatarCircle
                        url={senderInfo(message.sender.documentId).avatar}
                      />
                    ),
                    title: senderInfo(message.sender.documentId).userName,
                  }}
                  isIncoming={
                    localStorage.getItem(LOCAL_STORAGE.userDocumentId) !==
                    message.sender.documentId
                  }
                  {...(idx === messages.length - 3 && { Ref: observerRef })}
                />
              ))}
            </>
          ),
        }[type]
      }
    </div>
  );
}
