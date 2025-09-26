"use client";

import { CaphionTitle, getTitleByPathName } from "@/shared";
import { usePathname } from "next/navigation";
import { UserAvatar } from "./userAvatar";

export const PrivateHeader = () => {
  const pathName = usePathname();
  const title = getTitleByPathName(pathName);

  return (
    <header className="h-14  md:h-24 bg-[var(--light-gray)] border-b border-[var(--gray)] flex items-center px-5 sm:px-10 justify-between w-full">
      <CaphionTitle text={title} />
      <div className="h-8 md:h-16 relative">
        <UserAvatar />
      </div>
    </header>
  );
};
