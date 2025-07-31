"use client";

import { Logo, SidebarLink } from "@/entities";
import { Button, IconButton, SubText, Tag, Text } from "@/shared";
import clsx from "clsx";
import { ArrowLeft, MessageCircleMoreIcon, UsersRound } from "lucide-react";
import { useState } from "react";
import { SidebarGroup } from "./sidebarGroup";
import { SIDEBAR_DATA } from "../config/sedibar-data";

export const Sidebar = () => {
  const [isClose, setIsClose] = useState(false);

  return (
    <div
      className={clsx(
        "bg-[var(--white)] min-h-[100dvh] border-r flex flex-col",
        !isClose && "max-w-75 w-75 min-w-75",
        isClose && "w-12 min-w-16 max-w-16"
      )}
    >
      <div
        className={clsx(
          "h-24 flex px-3 bg-[var(--light-gray)] border-b",
          !isClose && "justify-between",
          isClose && "justify-center"
        )}
      >
        {!isClose && <Logo />}
        <IconButton
          className={clsx(isClose && "rotate-180")}
          icon={<ArrowLeft />}
          onClick={() => setIsClose(!isClose)}
        />
      </div>

      <SidebarGroup
        className="border-b border-[var(--gray)]"
        isClose={isClose}
        data={[
          { ...SIDEBAR_DATA.chat[0], tag: "999" },
          { ...SIDEBAR_DATA.chat[1], tag: "99" },
        ]}
        button={
          <Button
            className={clsx(
              "bg-[var(--primery)] text-[1.25rem] leading-[140%] text-semibold mx-auto mt-2 hover:bg-[var(--primery-light)]",
              !isClose && "w-[90%]",
              isClose && "text-[1.75rem] w-[60%]"
            )}
            text={isClose ? "+" : "+ Create chat"}
          />
        }
      />
      <SidebarGroup
        className="border-b border-[var(--gray)]"
        isClose={isClose}
        data={SIDEBAR_DATA.nav}
      />
      <SidebarGroup
        className="border-b border-[var(--gray)]"
        isClose={isClose}
        data={SIDEBAR_DATA.help}
      />
      <SidebarGroup isClose={isClose} data={SIDEBAR_DATA.recommendation} />

      <div className="h-24 bg-[var(--light-gray)] mt-auto">
        <Button text="" />
      </div>
    </div>
  );
};
