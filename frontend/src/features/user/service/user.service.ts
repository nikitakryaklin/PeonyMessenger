import { api, IAbout, IUser, LOCAL_STORAGE } from "@/shared";

export const userService = {
  getAbout: () =>
    api().get<{ data: IAbout[] }>(
      `aboouts/?filters[user][id][$eq]=${localStorage.getItem(
        LOCAL_STORAGE.userId
      )}&populate=avatar`
    ),
  findUsersByUserName: async (username = "") =>
    await api().get<(IUser & { about: IAbout | null })[]>(
      `users/?populate[about][populate][avatar]=true&filters[$or][0][chat][id][$null]=true&filters[$or][1][contacts][contact][id][$ne]=${localStorage.getItem(
        LOCAL_STORAGE.userId
      )}&filters[id][$ne]=${localStorage.getItem(
        LOCAL_STORAGE.userId
      )}&filters[username][$contains]=${username}`
    ),
};
