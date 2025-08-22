import { api, IPagination, LOCAL_STORAGE } from "@/shared";
import { IMycontacts } from "../model/contacts.inteface";

export const contactService = {
  create: (data: { userId: number }) => {
    return Promise.all([
      api().post<any, any>("contacts", {
        data: {
          user: localStorage.getItem(LOCAL_STORAGE.userId),
          contact: data.userId,
        },
      }),
      api().post<any, any>("contacts", {
        data: {
          user: data.userId,
          contact: localStorage.getItem(LOCAL_STORAGE.userId),
        },
      }),
    ]);
  },

  get: (userName: string) =>
    api().get<{ data: IMycontacts[] } & IPagination>(
      `contacts?filters[user][id][$eq]=${localStorage.getItem(
        LOCAL_STORAGE.userId
      )}` +
        "&populate[contact][populate][about][populate][avatar]=true" +
        `&filters[contact][username][$contains]=${userName}`
      // "users/me?populate[contacts][populate][contact][populate][about][populate][avatar]=true"
    ),
};
