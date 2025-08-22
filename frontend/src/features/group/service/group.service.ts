import { api, IPagination, LOCAL_STORAGE } from "@/shared";
import { IGroup } from "../model/group-interface";

export const groupService = {
  get: async (name: string, page: number) => {
    return await api().get<{ data: IGroup[] } & IPagination>(
      "chats/?filters[type][$eq]=group&filters[$and][0][participants][id][$eq]" +
        `=${localStorage.getItem(LOCAL_STORAGE.userId)}` +
        `&filters[$and][1][name][$contains]=${name}` +
        "&populate[participants][populate][about][populate][avatar]=true" +
        "&populate[messages][populate][sender][sort][0]=createdAt:desc" +
        "&sort[0]=updatedAt:desc" +
        `&pagination[page]=${page}` +
        "&pagination[pageSize]=25"
    );
  },

  create: (
    users: {
      id: number;
      userName: string;
    }[]
  ) =>
    api().post<any, any>("chats", {
      data: {
        participants: [
          Number(localStorage.getItem(LOCAL_STORAGE.userId)),
          users.map((user) => user.id),
        ],
        type: "group",
        name: users.map((user) => user.userName).join(", "),
      },
    }),

  getByid: async (chatId: string) =>
    api().get<{ data: IGroup }>(
      "chats/" +
        chatId +
        "?populate[participants][populate][about][populate][avatar]=true"
    ),
};
