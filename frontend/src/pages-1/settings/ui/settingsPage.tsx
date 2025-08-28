"use client";

import { ColorField, RangeField, Text } from "@/shared";
import { ChangeEvent, useId, useState } from "react";
import { SETTINGS_PAGE_DATA } from "../model/settingPage-data";
import { li } from "motion/react-client";
import { SidebarLink } from "@/entities";
import { Earth } from "lucide-react";
import { I18n } from "@/features/i18n/ui/i18n";
import { useCutomizeStore } from "./cutomizeStore";

export const SettingsPage = () => {
  const textSize = useId();
  const colorPicker = useId();

  const [currentColor, setCurrentColor] = useState("#e0b8ff");

  const setCurrentIndex = useCutomizeStore((s) => s.setCurrentindex);
  const currenIndex = useCutomizeStore((s) => s.currenIndex);
  //   const [currentText, setCurrentText] = useState();

  const onColor = (e: ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty("--primery", e.target.value);
    document.documentElement.style.setProperty(
      "--primery-light",
      e.target.value
    );
    setCurrentIndex(e.target.value);
  };

  const onText = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentIndex(e.target.value);
  };

  return (
    <div>
      <ul>
        {SETTINGS_PAGE_DATA.map((el) => (
          <li key={el.id}>
            <SidebarLink
              text={el.text}
              icon={el.icon}
              href={el.link}
              isClose={false}
            />
          </li>
        ))}
        <SidebarLink
          text="Language"
          icon={<Earth />}
          href="#"
          isClose={false}
          className="hover:bg-[var(--white)]"
          tag={<I18n color={{ bg: "--primery", text: "--black" }} />}
        />
      </ul>
      <form className="px-3 flex flex-col">
        <RangeField
          title="Text size"
          id={textSize}
          min={"0.8"}
          step={"0.1"}
          max={"1.2"}
          value={currenIndex}
          onChange={onText}
        />

        <ColorField
          text="Change primery color"
          currentColor={currentColor}
          id={colorPicker}
          onColor={onColor}
        />
      </form>
    </div>
  );
};
