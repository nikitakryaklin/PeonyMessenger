"use client";

import { usePathname } from "next/navigation";
import { PrivateHeader } from "./privateHeader";
import { PublicHeader } from "./publicHeader";

export const Header = () => {
  const pathName = usePathname();

  const isAccountPage = pathName.includes("/account");

  if (isAccountPage) {
    return <PrivateHeader />;
  }
  if (!isAccountPage) {
    return <PublicHeader />;
  }
};
