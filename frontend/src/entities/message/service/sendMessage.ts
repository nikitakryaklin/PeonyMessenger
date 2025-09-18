import { api } from "@/shared";
import { TMessage, TTypeMessage } from "../model/massage-interface";

export const sendMessage = (
  data: {
    chat: number | string;
    sender: number;
  } & TTypeMessage
) => {
  return api().post<{ data: TMessage }, any>("messages", { data });
};
