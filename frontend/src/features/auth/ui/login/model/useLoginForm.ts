"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../api/useLoginMutation";
import { ILoginForm } from "./loginForm-interface";

export function useLoginForm() {
  const { mutate, mutateError, isLoading } = useLoginMutation();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ILoginForm>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    mutate(data);
    reset();
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    errors,
    mutateError,
    isLoading,
  };
}
