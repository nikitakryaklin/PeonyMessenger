import { Button } from "@/shared";
import clsx from "clsx";
import Image from "next/image";

export const OAuthGoogle = ({ className }: { className?: string }) => {
  return (
    <Button
      className={clsx(
        "border border-[var(--black)] w-full h-12 gap-2",
        className
      )}
      text="Continue with Google"
      icon={
        <Image src="/icon/google.svg" width={25} height={25} alt="Google" />
      }
    />
  );
};
