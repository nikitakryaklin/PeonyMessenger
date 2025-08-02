import { strapiImage } from "./strapiImage-inteface";

export interface IAbout {
  id: number;
  documentId: string;
  name: string | null;
  dateOfBirth: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  avatar: strapiImage[] | null;
}
