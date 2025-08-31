import { ErrorField } from "@/entities";
import { Button, Field, getValidateError } from "@/shared";
import { useLoginForm } from "../model/useLoginForm";
import Link from "next/link";
import clsx from "clsx";

export const LoginForm = () => {
  const { onSubmit, register, errors, mutateError, isLoading } = useLoginForm();

  return (
    <form onSubmit={onSubmit} className="mb-6 flex flex-col gap-4">
      <Field
        title="Email address"
        className="w-full "
        {...register("identifier", { ...getValidateError("Email") })}
      />
      <div className="flex flex-col gap-1">
        <Field
          title="Password"
          className="w-full mb-0"
          type="password"
          {...register("password", { ...getValidateError("Password") })}
        />
        <Link
          href={"#"}
          className="underline text-xs text-[var(--black)] ml-auto "
        >
          Forgot password?
        </Link>
      </div>

      {(!!Object.values(errors).length || mutateError) && (
        <ErrorField
          RHFError={Object.entries(errors)}
          mutateError={mutateError}
        />
      )}

      <Button
        text="Continue"
        type="submit"
        disabled={isLoading}
        promise={{ loading: isLoading }}
        className={clsx(
          "bg-[var(--black)] w-full h-12",
          isLoading && "bg-[var(--gray)] cursor-default"
        )}
        textClasses="text-[var(--white)]"
      />
    </form>
  );
};
