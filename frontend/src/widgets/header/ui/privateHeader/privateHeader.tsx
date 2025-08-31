"use client";

import { CaphionTitle, getTitleByPathName } from "@/shared";
import { usePathname } from "next/navigation";
import { UserAvatar } from "./userAvatar";

export const PrivateHeader = () => {
  const pathName = usePathname();
  const title = getTitleByPathName(pathName);

  return (
    <header className="h-24 bg-[var(--light-gray)] border-b border-[var(--gray)] flex items-center px-10 justify-between">
      <CaphionTitle text={title} />
      <div className="h-16 relative">
        <UserAvatar />
      </div>
    </header>
  );
};
