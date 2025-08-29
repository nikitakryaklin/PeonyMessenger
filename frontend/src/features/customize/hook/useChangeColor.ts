"use client";

import { ChangeEvent, useEffect, useId } from "react";
import { TColorName } from "../model/customize-interface";
import { useCustomizeColorStore } from "../model/useCustomizeColorStore";

export const useChangeColor = () => {
  const primeryId = useId();
  const primeryLightId = useId();

  const setColor = useCustomizeColorStore((s) => s.setColors);
  const primery = useCustomizeColorStore((s) => s.primery);
  const primeryLight = useCustomizeColorStore((s) => s.primeryLight);
  const resetColor = useCustomizeColorStore((s) => s.resetColor);

  const onColor = (colorName: TColorName, e: ChangeEvent<HTMLInputElement>) => {
    const colorValue = e.target.value;

    setColor(colorName, colorValue);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--primery", primery);
  }, [primery]);

  useEffect(() => {
    document.documentElement.style.setProperty("--primery-light", primeryLight);
  }, [primeryLight]);

  return {
    primeryId,
    primeryLightId,
    colors: {
      primery,
      primeryLight,
    },
    onColor,
    resetColor,
  };
};
