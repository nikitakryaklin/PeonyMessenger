import { Sidebar } from "@/widgets";
import { Header } from "@/widgets";
import { ReactNode } from "react";

export const AccountPage = ({
  children,
  panel,
}: {
  children: ReactNode;
  panel: ReactNode;
}) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="w-full h-full flex">
          {children}
          <div className="w-[75%] h-full bg-red-400 ml-auto">{panel}</div>
        </div>
      </div>
    </div>
  );
};
