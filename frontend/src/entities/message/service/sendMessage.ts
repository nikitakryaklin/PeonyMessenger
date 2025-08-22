import { api } from "@/shared";
import { TMessage } from "../model/massage-interface";

export const sendMessage = (data: {
  massage: string;
  chat: number | string;
  sender: number;
}) => {
  console.log(data);
  return api().post<{ data: TMessage }, any>("messages", { data });
};
