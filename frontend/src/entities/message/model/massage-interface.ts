import { IAbout, IUser } from "@/shared";

export interface IMassage {
  id: number;
  documentId: string;
  massange: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface IChatMessangeSender {
  sender: IUser;
}

export type TChatMessange = IMassage & IChatMessangeSender;

interface IGroupMessangeSender {
  sender: IUser & { about: IAbout | null };
}

export type TGroupMessange = IMassage & IGroupMessangeSender;
