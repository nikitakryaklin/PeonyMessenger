import type { PropsWithChildren } from "react";
import { Header } from "@/widgets";

export function AuthPage({ children }: PropsWithChildren<unknown>) {
  return (
    <main className=" w-full">
      <Header />
      {children}
    </main>
  );
}
