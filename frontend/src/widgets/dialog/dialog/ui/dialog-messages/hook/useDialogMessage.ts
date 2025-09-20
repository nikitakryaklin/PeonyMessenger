import { useMessageGetByChatId, useMessageSubscription } from "@/entities";
import { LOCAL_STORAGE, useIntersection } from "@/shared";
import { useScrollToBottom } from "../../../hook/useScrollToBottom";
import { useEffect } from "react";

export const useDialogMessage = (params: string) => {
  const { isPendingMessage, nextPage } = useMessageGetByChatId(params);
  const { messages } = useMessageGetByChatId(params);

  const nextPagefetchNextPage = (e: any) => {
    nextPage.fetchNextPage();
  };
  const observerRef = useIntersection(nextPagefetchNextPage);

  const { meessagesFildRef, scrollToBottom } = useScrollToBottom();

  useMessageSubscription(params);

  const isSender = (id: string) =>
    localStorage.getItem(LOCAL_STORAGE.userDocumentId) !== id;

  useEffect(() => {
    if (!messages || messages.length === 0) return;
    if (!isSender(messages[messages.length - 1].sender.documentId)) {
      scrollToBottom("smooth");
    }
  }, [messages]);

  return {
    messages,
    isPendingMessage,

    ref: {
      observerRef,
      meessagesFildRef,
    },
    isSender,
  };
};
