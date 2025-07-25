"use client";

import { Button, Field, ROUTES, Text, Title } from "@/shared";
import { ShieldAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";

export const RegisterPage = () => {
  const [buttonText, setButtonText] = useState("Continue");

  const click = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText("Create account");
  };

  return (
    <div className="w-96 mt-24 mx-auto">
      <Title text="Create your free account" className="text-center mb-2" />
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
      <form onSubmit={click} className="mb-6 flex flex-col gap-4">
        {buttonText === "Continue" && (
          <Field title="Email address" name="email" className="w-full " />
        )}
        {buttonText === "Create account" && (
          <>
            <Field title="User name" name="text" className="w-full " />
            <Field
              title="Password"
              name={"email"}
              className="w-full mb-0"
              type="password"
            />
          </>
        )}

        <div className="bg-red-200 flex gap-2 p-2 rounded-[0.5rem]">
          <ShieldAlert style={{ stroke: "var(--red)" }} className="min-w-7" />
          <Text text="Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"></Text>
        </div>

        <Button
          text={buttonText}
          onClick={(e: any) => click(e)}
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
