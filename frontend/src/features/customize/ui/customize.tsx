"use client";

import { Text } from "@/shared";
import { useChangeColor } from "../hook/useChangeColor";
import { ChangeColors } from "./changeColors";
import { ChangeTextScale } from "./changeTextScale";
import { useTextScale } from "../hook/useTextScale";
import { useEffect, useState } from "react";

export const Customize = () => {
  const { colors } = useChangeColor();

  const { textOptions } = useTextScale();

  //   const fontSize = `clamp(1rem*${textOptions.textScale})`;

  const [fontSize, setFontSize] = useState("clamp(1rem*1)");

  useEffect(() => {
    setFontSize(`clamp(1rem*${textOptions.textScale})`);
  }, [textOptions.textScale]);

  return (
    <div className="flex flex-col gap-3">
      <ChangeTextScale />
      <div className="border-b border-[var(--gray)] pb-4">
        <div
          className="p-4 rounded-xl"
          style={{ background: colors.primeryLight }}
        >
          <p style={{ fontSize: fontSize }}>Chat</p>
        </div>
      </div>
      <ChangeColors />
    </div>
  );
};
