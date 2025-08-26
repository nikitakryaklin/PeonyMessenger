import { IAbout } from "@/shared";
import { UseMutateFunction } from "@tanstack/react-query";

export interface IEditForm {
  name: string | null;
  avatar: FileList | null;
}

export type IAboutMutate = UseMutateFunction<
  {
    data: IAbout;
  },
  Error,
  {
    name: string | null;
    avatar: FormData | null;
  },
  unknown
>;
