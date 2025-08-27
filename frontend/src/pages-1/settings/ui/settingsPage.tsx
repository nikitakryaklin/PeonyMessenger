"use client";

import { Text } from "@/shared";
import { ChangeEvent, useId } from "react";

export const SettingsPage = () => {
  const textSize = useId();
  const colorPicker = useId();

  const onColor = (e: ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty("--primery", e.target.value);
    document.documentElement.style.setProperty(
      "--primery-light",
      e.target.value
    );
  };

  return (
    <div>
      <form className="px-3 flex flex-col">
        <label htmlFor={textSize} className="w-full">
          <Text text="Change text size" className="w-full" />

          <input type="range" id={textSize} />
        </label>

        <label htmlFor={colorPicker}>
          <Text text="Change color" />
          <input
            type="color"
            id={colorPicker}
            className="h-5 w-5 rounded-full border"
            onChange={(e: ChangeEvent<HTMLInputElement>) => onColor(e)}
          />
        </label>
      </form>
    </div>
  );
};
