import { IUser } from "@/shared";

export interface IRegisterUser {
  data: {
    jwt: string;
    user: IUser;
  };
}
