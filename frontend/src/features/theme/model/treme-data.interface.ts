import { ReactNode } from "react";

interface ITremeDataEntity {
  id: string;
  text: string;
  value: "light" | "dark";
  icon: ReactNode;
}
export interface ITremeData {
  light: ITremeDataEntity;
  dark: ITremeDataEntity;
}
