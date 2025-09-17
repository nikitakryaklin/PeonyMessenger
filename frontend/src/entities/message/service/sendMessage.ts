import { api } from "@/shared";
import { TMessage, TTypeMessage } from "../model/massage-interface";

export const sendMessage = (data: {
  massage: string;
  type: TTypeMessage;
  chat: number | string;
  sender: number;
}) => {
  return api().post<{ data: TMessage }, any>("messages", { data });
};
