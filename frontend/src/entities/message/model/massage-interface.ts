import { IUser } from "@/shared";

export interface IMassage {
  id: number;
  documentId: string;
  massange: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  sender: IUser;
}
