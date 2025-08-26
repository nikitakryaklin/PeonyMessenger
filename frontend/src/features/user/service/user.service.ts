import {
  api,
  IAbout,
  IUser,
  LOCAL_STORAGE,
  uploadFilesService,
} from "@/shared";

export const userService = {
  findUsersByUserName: async (username = "") =>
    await api().get<(IUser & { about: IAbout | null })[]>(
      `users/?populate[about][populate][avatar]=true&filters[$or][0][chat][id][$null]=true&filters[$or][1][contacts][contact][id][$ne]=${localStorage.getItem(
        LOCAL_STORAGE.userId
      )}&filters[id][$ne]=${localStorage.getItem(
        LOCAL_STORAGE.userId
      )}&filters[username][$contains]=${username}`
    ),

  getAbout: async () =>
    api().get<{ data: IAbout[] }>(
      `aboouts/?filters[user][id][$eq]=${localStorage.getItem(
        LOCAL_STORAGE.userId
      )}&populate=avatar`
    ),

  createAbout: async (data: {
    name: string | null;
    avatar: FormData | null;
  }) => {
    const fileId = data.avatar ? await uploadFilesService(data.avatar) : null;
    const isName = !!data.name;

    return api().post<{ data: IAbout }, any>("aboouts", {
      data: {
        user: localStorage.getItem(LOCAL_STORAGE.userId),
        ...(isName && { name: data.name }),
        ...(fileId && { avatar: fileId[0].id }),
      },
    });
  },

  updateAbout: async (data: {
    name: string | null;
    avatar: FormData | null;
  }) => {
    const fileId = data.avatar ? await uploadFilesService(data.avatar) : null;
    const isName = !!data.name;

    return api().put<{ data: IAbout }>(
      `aboouts/${localStorage.getItem(LOCAL_STORAGE.aboutDocumentId)}`,
      {
        data: {
          ...(isName && { name: data.name }),
          ...(fileId && { avatar: fileId[0].id }),
        },
      }
    );
  },
};
