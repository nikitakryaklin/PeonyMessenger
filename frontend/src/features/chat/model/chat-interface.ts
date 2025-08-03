import { IMassage } from "@/entities";
import { IAbout, IUser } from "@/shared";

export interface IChat {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  participants: (IUser & { about: IAbout | null })[];
  messages: IMassage[];
}
