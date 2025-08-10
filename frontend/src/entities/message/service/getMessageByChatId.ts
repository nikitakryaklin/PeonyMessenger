import { api } from "@/shared";

export const getMessageByChatId = (chatId: string) =>
  api().get<any>(
    `messages/?filters[chat][documentId][$eq]=${chatId}&populate[sender][populate][about][populate][avatar]=true`
  );
