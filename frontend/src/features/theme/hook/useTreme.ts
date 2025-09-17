"use client";

import { useEffect } from "react";
import { useThemeStore } from "../model/useTremeStore";
import { LOCAL_STORAGE } from "@/shared";

type TTheme = "light" | "dark";

export const useTheme = () => {
  const theme = useThemeStore((s) => s.theme);
  const setThemeState = useThemeStore((s) => s.setTheme);

  const onChangeTheme = (theme: TTheme) => {
    setThemeState(theme);
    document.documentElement.style.setProperty("--theme", theme);
  };

  const setTheme = (theme: TTheme) => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.setProperty(
      "--primery",
      theme === "dark" ? "#53475c" : "#e0b8ff"
    );
    document.documentElement.style.setProperty(
      "--primery-light",
      theme === "dark" ? "#c6abd9" : "#f5e7ff"
    );
    localStorage.removeItem(LOCAL_STORAGE.colorStore);
  };

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return { theme, onChangeTheme };
};
