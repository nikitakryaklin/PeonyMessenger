import { api } from "@/shared";

export const getMessageByChatId = (chatId: string) =>
  api().get<any>(
    `messages/?filters[chat][documentId][$eq]=${chatId}&sort=createdAt:desc&populate[sender][populate][about][populate][avatar]=true`
  );
