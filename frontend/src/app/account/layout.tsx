import { AccountPage } from "@/pages-1";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AccountPage>{children}</AccountPage>;
}
