import { api, IPagination, LOCAL_STORAGE } from "@/shared";
import { IChat } from "../../model/chat-interface";

export const chatService = {
  get: async (userName: string, page: number) => {
    return await api().get<{ data: IChat[] } & IPagination>(
      "chats/?filtres[participants][id][$eq]" +
        `=${localStorage.getItem(LOCAL_STORAGE.userId)}` +
        `&filters[participants][username][$containsi]=${userName}` +
        "&populate[participants][populate][about][populate][avatar]=true" +
        "&populate[messages][populate][sender][sort][0]=createdAt:desc" +
        `&pagination[page]=${page}` +
        "&pagination[pageSize]=5"
    );
  },
};
