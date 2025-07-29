import { API } from "@/shared/config/api";
import { FetchClient } from "../fetch/fetch-client";

export const api = (isAuth = true, baseURL = API) => {
  return new FetchClient({
    baseURL: baseURL,
    ...(isAuth && {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }),
    options: {
      credentials: "include",
    },
  });
};
