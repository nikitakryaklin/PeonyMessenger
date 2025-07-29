"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useRegisterMutation } from "../api/useRegisterMutation";
import { IRegisterForm } from "./registerForm-interface";

export function useRegisterForm() {
  const { mutate, isLoading, mutateError } = useRegisterMutation();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm<IRegisterForm>({
    mode: "onChange",
  });

  const onFormSubmit: SubmitHandler<IRegisterForm> = (data) => {
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
