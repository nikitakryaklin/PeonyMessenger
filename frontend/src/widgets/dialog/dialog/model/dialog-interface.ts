import { IAbout, IUser } from "@/shared";

export type TParticipants = (IUser & {
  about: IAbout | null;
})[];
