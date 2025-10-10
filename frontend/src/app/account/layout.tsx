import { AccountPage } from "@/pages-1";
import { ReactNode } from "react";

export default function AccountLayout({
  children,
  panel,
}: Readonly<{
  children: React.ReactNode;
  panel: ReactNode;
}>) {
  return <AccountPage panel={panel}>{children}</AccountPage>;
}
