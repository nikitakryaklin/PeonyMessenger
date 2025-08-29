"use client";

import { ChangeEvent, useEffect, useId } from "react";
import { useCustomizeTextStore } from "../model/useCustomizeTextStore";
import { TTextScale } from "../model/customize-interface";

export const useTextScale = () => {
  const textScaleId = useId();

  const textScale = useCustomizeTextStore((s) => s.textScale);
  const setTextScale = useCustomizeTextStore((s) => s.setTextScale);

  const onTextScale = (e: ChangeEvent<HTMLInputElement>) => {
    const validValue: TTextScale[] = ["0.8", "0.9", "1", "1.1", "1.2"];
    const value = e.target.value as any;

    if (!validValue.includes(value)) return;

    setTextScale(value);
  };

  useEffect(() => {
    const style = document.documentElement.style;
    style.setProperty("--text-scale", textScale);
  }, [textScale]);

  return {
    textOptions: {
      textScaleId,
      textScale,
    },
    onTextScale,
  };
};
