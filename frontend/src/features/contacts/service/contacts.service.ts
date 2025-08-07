import { api, LOCAL_STORAGE } from "@/shared";

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
};
