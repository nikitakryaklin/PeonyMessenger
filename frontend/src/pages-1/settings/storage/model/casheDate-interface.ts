import { ReactNode } from "react";

export interface ICacheData {
  id: string;
  icon: ReactNode;
  size: number;
  name: "chat" | "group";
  keys: string[];
}
