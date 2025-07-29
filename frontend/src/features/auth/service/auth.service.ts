import { api, LOCAL_STORAGE } from "@/shared";
import { IRegisterUser } from "../model/registeredUser-interface";
import { ILoginForm } from "../ui/login/model/loginForm-interface";
import { IRegisterForm } from "../ui/register/model/registerForm-interface";

export const authService = {
  login: async (data: ILoginForm) => {
    return await api(
      false,
      process.env.NEXT_PUBLIC_CLIENT_URL
    ).post<IRegisterUser>("api/login", { ...data });
  },

  lregister: async (data: IRegisterForm) =>
    await api(false, process.env.NEXT_PUBLIC_CLIENT_URL).post<IRegisterUser>(
      "api/register",
      { ...data }
    ),

  logout: () =>
    api(false, process.env.NEXT_PUBLIC_CLIENT_URL).post("api/logout"),

  oauth: () => {},

  setUserToLocalStorage: ({ data }: IRegisterUser) => {
    localStorage.setItem(LOCAL_STORAGE.token, data.jwt);
    localStorage.setItem(LOCAL_STORAGE.userId, `${data.user.id}`);
    localStorage.setItem(
      LOCAL_STORAGE.userDocumentId,
      `${data.user.documentId}`
    );
  },
};
