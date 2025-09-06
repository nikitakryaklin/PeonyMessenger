"use client";

import { ChangeEvent, useEffect, useId } from "react";
import { TColorName } from "../model/customize-interface";
import { useCustomizeColorStore } from "../model/useCustomizeColorStore";
import { PRIMERY_COLORS } from "@/shared";
import { useQueryClient } from "@tanstack/react-query";

export const useChangeColor = () => {
  const primeryId = useId();
  const primeryLightId = useId();

  const primery = useCustomizeColorStore((s) => s.primery);
  const primeryLight = useCustomizeColorStore((s) => s.primeryLight);
  const isSave = useCustomizeColorStore((s) => s.isSave);
  const setIsSave = useCustomizeColorStore((s) => s.setIsSave);
  const setColor = useCustomizeColorStore((s) => s.setColors);
  const resetColor = useCustomizeColorStore((s) => s.resetColor);

  const onColor = (colorName: TColorName, e: ChangeEvent<HTMLInputElement>) => {
    const colorValue = e.target.value;

    setColor(colorName, colorValue);
  };

  const mutationObserver = new MutationObserver(() => {
    const root = document.documentElement;
    const primery = getComputedStyle(root).getPropertyValue("--primery");
    const primeryLight =
      getComputedStyle(root).getPropertyValue("--primery-light");

    setColor("primery", primery);
    setColor("primeryLight", primeryLight);
  });

  mutationObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme", "style"],
  });

  const onSaveColorSettings = () => {
    document.documentElement.style.setProperty("--primery", primery);
    document.documentElement.style.setProperty("--primery-light", primeryLight);
    setIsSave(true);
  };

  const onResetColors = (theme: "light" | "dark") => {
    document.documentElement.style.setProperty(
      "--primery",
      PRIMERY_COLORS.primery[theme]
    );
    document.documentElement.style.setProperty(
      "--primery-light",
      PRIMERY_COLORS.primeryLight[theme]
    );
    resetColor(theme);
  };

  useEffect(() => {
    if (isSave) {
      document.documentElement.style.setProperty("--primery", primery);
      document.documentElement.style.setProperty(
        "--primery-light",
        primeryLight
      );
    }
  }, [isSave]);

  return {
    primeryId,
    primeryLightId,
    colors: {
      primery,
      primeryLight,
    },
    onColor,
    resetColor,
    onSaveColorSettings,
    onResetColors,
  };
};
