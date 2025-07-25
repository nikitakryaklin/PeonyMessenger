import type { PropsWithChildren } from "react";

export function AuthPage({ children }: PropsWithChildren<unknown>) {
  return <div className=" w-full">{children}</div>;
}
