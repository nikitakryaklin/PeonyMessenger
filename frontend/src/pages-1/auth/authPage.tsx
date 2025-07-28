import type { PropsWithChildren } from "react";

export function AuthPage({ children }: PropsWithChildren<unknown>) {
  return <main className=" w-full">{children}</main>;
}
