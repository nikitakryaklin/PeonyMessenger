"use client";

import { CaphionTitle, getTitleByPathName } from "@/shared";
import { usePathname } from "next/navigation";

export const PrivateHeader = () => {
  const pathName = usePathname();
  const title = getTitleByPathName(pathName);

  return (
    <header className="h-24 border-b flex items-center px-10">
      <CaphionTitle text={title} />
      <div></div>
    </header>
  );
};
