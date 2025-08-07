import { api, IPagination, LOCAL_STORAGE } from "@/shared";
import { IChat, IEmptyChat } from "../model/chat-interface";

export const chatService = {
  get: async (userName: string, page: number) => {
    return await api().get<{ data: IChat[] } & IPagination>(
      "chats/?filters[$and][0][participants][id][$eq]" +
        `=${localStorage.getItem(LOCAL_STORAGE.userId)}` +
        `&filters[$and][1][participants][username][$contains]=${userName}` +
        "&populate[participants][populate][about][populate][avatar]=true" +
        "&populate[messages][populate][sender][sort][0]=createdAt:desc" +
        "&sort[0]=updatedAt:desc" +
        `&pagination[page]=${page}` +
        "&pagination[pageSize]=25"
    );
  },

  create: async (data: { userId: number }) =>
    api().post<{ data: IEmptyChat }, { data: { participants: Number[] } }>(
      "chats",
      {
        data: {
          participants: [
            Number(localStorage.getItem(LOCAL_STORAGE.userId)),
            data.userId,
          ],
        },
      }
    ),
};
