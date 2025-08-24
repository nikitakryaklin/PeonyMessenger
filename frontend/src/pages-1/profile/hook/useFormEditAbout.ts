import { SubmitHandler, useForm } from "react-hook-form";
import { IAboutMutate, IEditForm } from "../model/formEdit-interface";
import { UseMutateFunction } from "@tanstack/react-query";
import { IAbout } from "@/shared";

export const useFormEditAbout = (mutate: IAboutMutate) => {
  const { register, reset, handleSubmit } = useForm<IEditForm>();

  const onSubmitForm: SubmitHandler<IEditForm> = (data) => {
    console.log(data.name, "dsa");
    mutate(data);
    reset();
  };

  return { onSubmit: handleSubmit(onSubmitForm), register };
};
