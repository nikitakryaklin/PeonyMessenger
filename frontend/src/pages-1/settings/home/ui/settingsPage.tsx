"use client";

import { ColorField, RangeField, Text } from "@/shared";
import { ChangeEvent, useId, useState } from "react";
import { SETTINGS_PAGE_DATA } from "../model/settingPage-data";
import { li } from "motion/react-client";
import { SidebarLink } from "@/entities";
import { Earth } from "lucide-react";
import { I18n } from "@/features/i18n/ui/i18n";
import { SettingsWrapper } from "./settingsWrapper";

export const SettingsPage = () => {
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
          icon={<Earth style={{ stroke: "var(--black)" }} />}
          href="#"
          isClose={false}
          className="hover:bg-[var(--white)]"
          tag={<I18n color={{ bg: "--primery", text: "--black" }} />}
        />
      </ul>
    </div>
  );
};
