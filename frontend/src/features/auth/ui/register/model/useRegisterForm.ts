"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useRegisterMutation } from "../api/useRegisterMutation";
import { IRegister } from "./registerForm-interface";

export function useRegisterForm() {
  const { mutate, isLoading, mutateError } = useRegisterMutation();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm<IRegister>({
    mode: "onChange",
  });

  const onFormSubmit: SubmitHandler<IRegister> = (data) => {
    mutate({ ...data });
    reset();
  };

  return {
    onSubmit: handleSubmit(onFormSubmit),
    errors,
    register,
    mutateError,
    isLoading,
    clearErrors,
  };
}
