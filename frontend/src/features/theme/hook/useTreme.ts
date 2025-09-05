"use client";

import { useEffect } from "react";
import { useThemeStore } from "../model/useTremeStore";
import { LOCAL_STORAGE } from "@/shared";

export const useTheme = () => {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);

  const onChangeTheme = (theme: "light" | "dark") => {
    setTheme(theme);
    document.documentElement.style.setProperty("--theme", theme);
  };

  useEffect(() => {
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
  }, [theme]);

  return { theme, onChangeTheme };
};
