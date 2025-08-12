import { IAbout, IUser } from "@/shared";

export interface IMassageEntity {
  id: number;
  documentId: string;
  massage: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  sender: IUser & { about: IAbout | null };
}

interface IDialogMessage {
  sender: IUser & { about: IAbout | null };
}

export type TMessage = IMassageEntity & IDialogMessage;
