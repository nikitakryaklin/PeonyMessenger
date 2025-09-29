"use client";

import { Button } from "@/shared";
import clsx from "clsx";
import Image from "next/image";
import { useEffect } from "react";
import { useGoogleMutation } from "../../api/useGoogleMutation";

export const OAuthGoogle = ({ className }: { className?: string }) => {
  const { mutateGoogle, isPendingGoogle } = useGoogleMutation();

  const OAuth2 = async () => {
    window.location.href =
      process.env.NEXT_PUBLIC_API_URL + "/api/connect/google";
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const google_token = queryParams.get("access_token");

    if (!google_token) return;

    mutateGoogle(google_token);
  }, [mutateGoogle]);

  return (
    <Button
      className={clsx(
        "border border-[var(--black)] w-full h-12 gap-2",
        className
      )}
      onClick={OAuth2}
      text="Continue with Google"
      icon={
        !isPendingGoogle && (
          <Image src="/icon/google.svg" width={25} height={25} alt="Google" />
        )
      }
      promise={{ loading: isPendingGoogle, color: "var(--black)" }}
    />
  );
};
