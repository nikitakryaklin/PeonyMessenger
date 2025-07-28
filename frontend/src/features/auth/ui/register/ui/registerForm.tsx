"use client";

import { Button, Field, getValidateError, useMutliStepForm } from "@/shared";
import { useRegisterForm } from "../model/useRegisterForm";
import { ErrorField } from "@/entities";
import clsx from "clsx";
import { useFromStepStore } from "../model/useFormStepStore";

export const RegisterForm = () => {
  const { onSubmit, register, errors, mutateError, isLoading, clearErrors } =
    useRegisterForm();

  const step = useFromStepStore((s) => s.step);
  const total = useFromStepStore((s) => s.total);
  const nextStep = useFromStepStore((s) => s.nextStep);

  const { formAction, formSubmit } = useMutliStepForm(
    total,
    step,
    nextStep,
    onSubmit,
    clearErrors
  );

  const disabled = isLoading || !!Object.values(errors).length;

  return (
    <form onSubmit={formSubmit} className="mb-6 flex flex-col gap-4">
      <Field
        title="Email address"
        className="w-full"
        elementClassName={clsx(step === 2 && "hidden")}
        {...register("email", { ...getValidateError("Email") })}
      />
      <Field
        title="User name"
        className="w-full "
        elementClassName={clsx(step === 1 && "hidden")}
        {...register("username", { ...getValidateError("User name") })}
      />
      <Field
        title="Password"
        className="w-full mb-0"
        type="password"
        elementClassName={clsx(step === 1 && "hidden")}
        {...register("password", { ...getValidateError("Password") })}
      />

      {(!!Object.values(errors).length || mutateError) && (
        <ErrorField
          RHFError={Object.entries(errors)}
          mutateError={mutateError?.message}
        />
      )}
      <Button
        text={step === 1 ? "Continue" : "Create account"}
        type="button"
        disabled={disabled}
        promise={{ loading: isLoading }}
        onClick={() => formAction()}
        className={clsx(
          "bg-[var(--black)] text-[var(--white)] w-full h-12",
          disabled && "bg-[var(--gray)] cursor-default"
        )}
      />
    </form>
  );
};
