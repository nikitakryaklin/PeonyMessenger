"use client";

import {
  API,
  Button,
  Field,
  getValidateError,
  ROUTES,
  Text,
  Title,
} from "@/shared";
import { ShieldAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRegisterForm } from "../model/useRegisterForm";

export const RegisterPage = () => {
  const [buttonText, setButtonText] = useState("Continue");

  const { onSubmit, register, errors, mutationError } = useRegisterForm();

  return (
    <div className="w-96 mt-24 mx-auto">
      <Title text="Create account" className="text-center mb-2" />
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
          {...register("email", { ...getValidateError("Email") })}
        />
        <Field
          title="User name"
          className="w-full "
          {...register("username", { ...getValidateError("User name") })}
        />
        <Field
          title="Password"
          className="w-full mb-0"
          type="password"
          {...register("password", { ...getValidateError("Password") })}
        />

        {!!Object.values(errors).length ||
          (mutationError && (
            <div className="bg-red-200 flex gap-2 p-2 rounded-[0.5rem]">
              <ShieldAlert
                style={{ stroke: "var(--red)" }}
                className="min-w-7"
              />
              <div>
                {Object.entries(errors).map((el) => (
                  <Text key={el[0]} text={el[0] + " - " + el[1].message} />
                ))}
              </div>
              <Text text={mutationError.message} />
            </div>
          ))}

        <Button
          text={buttonText}
          type="button"
          className="bg-[var(--black)] text-[var(--white)] w-full h-12 mt-4"
        />
      </form>
      {buttonText === "Continue" && (
        <div className="flex gap-1 items-center justify-center">
          <Text text="Already have an account?" />
          <Link href={ROUTES.login} className="underline font-semibold mr-5">
            Sing in
          </Link>
        </div>
      )}
    </div>
  );
};
