import { LOCAL_STORAGE } from "@/shared";
import { IRegisterUser } from "./registeredUser-interface";

export const login = ({ data }: IRegisterUser) => {
  localStorage.setItem(LOCAL_STORAGE.token, data.jwt);
  localStorage.setItem(LOCAL_STORAGE.userId, `${data.user.id}`);
  localStorage.setItem(LOCAL_STORAGE.userDocumentId, `${data.user.documentId}`);
};
