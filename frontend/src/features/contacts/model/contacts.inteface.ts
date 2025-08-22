import { IAbout, IUser } from "@/shared";

export interface IContacts {
  id: number;
  documentId: string;
  user: IUser;
  contacts: IUser;
}

export interface IMycontacts {
  id: 14;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  contact: IUser & { about: IAbout };
}
