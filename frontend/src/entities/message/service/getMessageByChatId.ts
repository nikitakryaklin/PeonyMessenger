import { api } from "@/shared";
import { TMessage } from "../model/massage-interface";

export const getMessageByChatId = (chatId: string) =>
  api().get<{ data: TMessage[] }>(
    `messages/?filters[chat][documentId][$eq]=${chatId}&sort=createdAt:desc&populate[sender][populate][about][populate][avatar]=true`
  );
