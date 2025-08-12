import { api } from "@/shared";
import { TMessage } from "../model/massage-interface";

export const sendMessage = (data: {
  massage: string;
  chat: number;
  sender: number;
}) => api().post<{ data: TMessage }, any>("messages", { data });
