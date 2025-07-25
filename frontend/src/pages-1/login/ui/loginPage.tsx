import { Button, Field, ROUTES, Text, Title } from "@/shared";
import Image from "next/image";
import Link from "next/link";

export const LoginPage = () => {
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
      <form action="" className="mb-6 flex flex-col gap-4">
        <Field title="Email address" name={"email"} className="w-full " />
        <div className="flex flex-col gap-1">
          <Field
            title="Password"
            name={"email"}
            className="w-full mb-0"
            type="password"
          />
          <Link href={"#"} className="underline text-xs ml-auto ">
            Forgot password?
          </Link>
        </div>

        <Button
          text="Continue"
          className="bg-[var(--black)] text-[var(--white)] w-full h-12"
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
