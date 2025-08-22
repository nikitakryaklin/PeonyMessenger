import { TMessage } from "@/entities";
import { IAbout, IUser } from "@/shared";

export interface IEmptyGroup {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  name: string;
  type: "group" | "chat";
}

export interface IGroup extends IEmptyGroup {
  participants: (IUser & { about: IAbout | null })[];
  messages: TMessage[];
}
