import { api, IPagination } from "@/shared";
import { TMessage } from "../model/massage-interface";

export const getMessageByChatId = (chatId: string, page: any) =>
  api().get<{ data: TMessage[] } & IPagination>(
    `messages/?filters[chat][documentId][$eq]=${chatId}&sort=createdAt:desc&populate[sender][populate][about][populate][avatar]=true&pagination[pageSize]=25&&pagination[page]=${page}`
  );
