import {
  AvatarCircle,
  MessageContainer,
  TMessage,
  useMessageGetByChatId,
} from "@/entities";
import { Loader, LOCAL_STORAGE, Stub, useIntersection } from "@/shared";
import { RefObject } from "react";

export function DialogMessages({
  type,
  Ref,
  params,
}: {
  type: "chat" | "group";
  Ref: RefObject<HTMLDivElement | null>;
  params: string;
}) {
  const { messages, isPendingMessage, nextPage } =
    useMessageGetByChatId(params);

  const observerRef = useIntersection(nextPage.fetchNextPage);

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
              {messages?.map((message) => (
                <MessageContainer
                  key={message.documentId}
                  text={message.massage}
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
  );
}
