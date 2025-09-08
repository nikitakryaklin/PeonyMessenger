import type { PropsWithChildren } from "react";
import { Header } from "@/widgets";

export function PablicPages({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
