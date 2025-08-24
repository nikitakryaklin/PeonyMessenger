import { IAbout } from "@/shared";
import { UseMutateFunction } from "@tanstack/react-query";

export interface IEditForm {
  name: string;
}

export type IAboutMutate = UseMutateFunction<
  {
    data: IAbout;
  },
  Error,
  IEditForm,
  unknown
>;
