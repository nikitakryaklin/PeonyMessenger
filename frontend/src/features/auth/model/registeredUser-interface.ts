import { IUser } from "@/entities";

export interface IRegisterUser {
  data: {
    jwt: string;
    user: IUser;
  };
}
