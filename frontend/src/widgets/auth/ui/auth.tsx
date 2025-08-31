import { Title, ROUTES, Text } from "@/shared";
import { ReactNode } from "react";
import { AUTH_DATA } from "../config/auth-data";
import { OAuthGoogle } from "@/features";
import Link from "next/link";

export const AuthWidget = ({
  children,
  pageType,
}: {
  children: ReactNode;
  pageType: "login" | "register";
}) => {
  return (
    <div className="w-96 mt-24 mx-auto">
      <Title text={AUTH_DATA.title[pageType]} className="text-center mb-2" />
      {pageType === "login" && (
        <Text
          text="To get started, please sing in"
          className="text-center text-[var(--black)]"
        />
      )}
      <OAuthGoogle className="mt-8.5 mb-4.5" />
      <Text
        text="or"
        className="text-center text-[var(--black)] mb-4.5 relative before:content-[''] before:absolute before:h-[1px] before:w-[45%] before:bg-[var(--black)] before:top-1/2 before:left-0 after:content-[''] after:absolute after:h-[1px] after:w-[45%] after:bg-[var(--black)] after:top-1/2 after:right-0"
      />
      {children}

      <div className="flex gap-1 items-center justify-center">
        <Text text={AUTH_DATA.linkText[pageType]} />
        <Link
          href={pageType === "register" ? ROUTES.login : ROUTES.register}
          className="underline font-semibold mr-5 text-[var(--black)]"
        >
          {AUTH_DATA.linkValue[pageType]}
        </Link>
      </div>
    </div>
  );
};
