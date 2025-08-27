import { MoonStar, Sun } from "lucide-react";
import { nanoid } from "nanoid";
import { ITremeData } from "./treme-data.interface";

export const TREME_DATA: ITremeData = {
  light: {
    id: nanoid(),
    text: "Light",
    value: "light",
    icon: <Sun />,
  },
  dark: {
    id: nanoid(),
    text: "Dark",
    value: "dark",
    icon: <MoonStar />,
  },
};
