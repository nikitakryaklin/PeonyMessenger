import { TChatMessange } from "@/entities";
import { IAbout, IUser } from "@/shared";

export interface IEmptyChat {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IChat extends IEmptyChat {
  participants: (IUser & { about: IAbout | null })[];
  messages: TChatMessange[];
}
