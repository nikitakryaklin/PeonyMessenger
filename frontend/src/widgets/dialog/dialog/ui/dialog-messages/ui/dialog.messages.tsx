import { AvatarCircle, MessageContainer } from "@/entities";
import { Loader, Stub } from "@/shared";
import { useDialogMessage } from "../hook/useDialogMessage";

export function DialogMessages({
  type,
  params,
}: {
  type: "chat" | "group";
  params: string;
}) {
  const { messages, isPendingMessage, ref, isSender } =
    useDialogMessage(params);

  if (isPendingMessage) {
    return <Loader color="#999" />;
  }

  if (!messages || messages.length === 0) {
    return <Stub text="Whire first message!" />;
  }

  return (
    <div
      ref={ref.meessagesFildRef}
      className="flex flex-col-reverse overflow-y-auto min-h-full   px-5"
    >
      {
        {
          chat: (
            <>
              {messages.map((message, idx) => (
                <MessageContainer
                  message={message}
                  key={message.documentId}
                  isIncoming={isSender(message.sender.documentId)}
                  {...(idx === messages.length - 3 && {
                    Ref: ref.observerRef,
                  })}
                />
              ))}
            </>
          ),
          group: (
            <>
              {messages.map((message, idx) => (
                <MessageContainer
                  message={message}
                  key={message.documentId}
                  info={{
                    avatar: (
                      <AvatarCircle
                        url={message.sender.about?.avatar?.[0].url}
                      />
                    ),
                    title: message.sender.username,
                  }}
                  isIncoming={isSender(message.sender.documentId)}
                  {...(idx === messages!.length - 3 && {
                    RefMessage: ref.observerRef,
                  })}
                />
              ))}
            </>
          ),
        }[type]
      }
    </div>
  );
}
