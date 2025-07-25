import { QueryClientCastomProvider } from "@/shared";
import { ReactNode } from "react";

export const MainPrivider = ({ children }: { children: ReactNode }) => {
  return <QueryClientCastomProvider>{children}</QueryClientCastomProvider>;
};
