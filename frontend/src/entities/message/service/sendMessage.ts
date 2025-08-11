import { api } from "@/shared";

export const sendMessage = (data: {
  massange: string;
  chat: number;
  sender: number;
}) => api().post<any, any>("messages", { data: { ...data } });
