import { useEffect } from "react";
import { useThemeStore } from "../model/useTremeStore";

export const useTheme = () => {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);

  const handleClick = (theme: "light" | "dark") => {
    setTheme(theme);
    document.documentElement.style.setProperty("color-scheme", theme);
  };

  useEffect(() => {}, [theme]);

  return { theme, handleClick };
};
