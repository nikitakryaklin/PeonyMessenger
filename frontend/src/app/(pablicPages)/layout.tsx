import { PablicPages } from "@/pages-1";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PablicPages>{children}</PablicPages>;
}
