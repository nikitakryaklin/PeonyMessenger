import { Sidebar } from "@/widgets";
import type { PropsWithChildren } from "react";

export const AccountPage = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};
