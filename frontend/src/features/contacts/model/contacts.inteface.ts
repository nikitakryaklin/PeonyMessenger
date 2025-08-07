import { IUser } from "@/shared";

export interface IContacts {
  id: number;
  documentId: string;
  user: IUser;
  contacts: IUser;
}
