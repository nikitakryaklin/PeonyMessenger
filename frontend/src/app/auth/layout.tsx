import { AuthPage } from "@/pages-1";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthPage>{children}</AuthPage>;
}
