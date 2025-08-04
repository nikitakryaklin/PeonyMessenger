import { api, IAbout, LOCAL_STORAGE } from "@/shared";

export const userService = {
  get: () =>
    api().get<{ data: IAbout[] }>(
      `aboouts/?filters[user][id][$eq]=${localStorage.getItem(
        LOCAL_STORAGE.userId
      )}&populate=avatar`
    ),
};
