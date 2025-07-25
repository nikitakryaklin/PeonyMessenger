import { SubmitHandler, useForm } from "react-hook-form";
import { useRegisterMutation } from "../api/useRegisterMutation";
import { IRegister } from "./registerForm-interface";

export function useRegisterForm() {
  const { createRegisterMutation, mutationError } = useRegisterMutation();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IRegister>({
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<IRegister> = (data) => {
    createRegisterMutation.mutate({ ...data });
    reset();
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    errors,
    register,
    mutationError,
  };
}
