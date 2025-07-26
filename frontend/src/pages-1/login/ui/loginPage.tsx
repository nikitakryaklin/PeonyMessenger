"use client";

import { Button, Field, getValidateError, ROUTES, Text, Title } from "@/shared";
import Image from "next/image";
import Link from "next/link";
import { useLoginForm } from "../model/useLoginForm";
import { ShieldAlert } from "lucide-react";
import clsx from "clsx";

export const LoginPage = () => {
  const { onSubmit, register, errors, mutateError, isLoading } = useLoginForm();

  return (
    <div className="w-96 mt-24 mx-auto">
      <Title text="Welcome to Peony!" className="text-center mb-2" />
      <Text text="To get started, please sing in" className="text-center" />
      <Button
        className="border w-full mt-8.5 mb-4.5 h-12 gap-2"
        text="Continue with Google"
        icon={
          <Image src="/icon/google.svg" width={25} height={25} alt="Google" />
        }
      />
      <Text
        text="or"
        className="text-center mb-4.5 relative before:content-[''] before:absolute before:h-[1px] before:w-[45%] before:bg-[var(--black)] before:top-1/2 before:left-0 after:content-[''] after:absolute after:h-[1px] after:w-[45%] after:bg-[var(--black)] after:top-1/2 after:right-0"
      />
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
          <Link href={"#"} className="underline text-xs ml-auto ">
            Forgot password?
          </Link>
        </div>

        {(!!Object.values(errors).length || mutateError) && (
          <div className="bg-red-200 flex gap-2 p-2 rounded-[0.5rem]">
            <ShieldAlert style={{ stroke: "var(--red)" }} className="min-w-7" />
            <div>
              {Object.entries(errors).map((el) => (
                <Text key={el[0]} text={el[0] + " - " + el[1].message} />
              ))}
            </div>
            <Text text={mutateError?.message || ""} />
          </div>
        )}

        <Button
          text="Continue"
          type="submit"
          disabled={isLoading}
          promise={{ loading: isLoading }}
          className={clsx(
            "bg-[var(--black)] text-[var(--white)] w-full h-12",
            isLoading && "bg-[var(--gray)] cursor-default"
          )}
        />
      </form>

      <div className="flex gap-1 items-center justify-center">
        <Text text="Don't have account?" />
        <Link href={ROUTES.register} className="underline font-semibold mr-5">
          Sing up
        </Link>
      </div>
    </div>
  );
};
