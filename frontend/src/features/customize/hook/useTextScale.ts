"use client";

import { ChangeEvent, useEffect, useId, useState } from "react";
import { useCustomizeTextStore } from "../model/useCustomizeTextStore";
import { TTextScale } from "../model/customize-interface";
import { LOCAL_STORAGE } from "@/shared";

export const useTextScale = () => {
  const textScaleId = useId();
  const style = document.documentElement.style;

  const textScale = useCustomizeTextStore((s) => s.textScale);
  const setTextScale = useCustomizeTextStore((s) => s.setTextScale);
  const resetTextScale = useCustomizeTextStore((s) => s.resetTextScale);

  const onTextScale = (e: ChangeEvent<HTMLInputElement>) => {
    const validValue: TTextScale[] = ["0.8", "0.9", "1", "1.1", "1.2"];
    const value = e.target.value as any;

    if (!validValue.includes(value)) return;

    setTextScale(value);
  };

  const onSaveTextScale = () => {
    style.setProperty("--text-scale", textScale);
  };

  const onResetTextScale = () => {
    resetTextScale();
    style.setProperty("--text-scale", "1");
  };

  useEffect(() => {
    const isTextScaleSave = localStorage.getItem(LOCAL_STORAGE.textScale);
    if (isTextScaleSave) {
      setTextScale(textScale);
    }
  }, [textScale]);

  return {
    textOptions: {
      textScaleId,
      textScale,
    },
    onTextScale,
    onSaveTextScale,
    onResetTextScale,
  };
};
