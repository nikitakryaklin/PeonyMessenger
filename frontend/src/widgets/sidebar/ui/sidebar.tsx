"use client";

import { SidebarLink } from "@/entities";
import { Tag } from "@/shared";
import clsx from "clsx";
import { MessageCircleMoreIcon, UsersRound } from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
  const [isClose, setIsClose] = useState(false);

  return (
    <div
      className={clsx(
        "bg-[var(--white)] min-h-[97dvh]",
        !isClose && "max-w-60 w-60 min-w-60",
        isClose && "w-12 min-w-12 max-w-12"
      )}
    >
      <SidebarLink
        text={"My chat"}
        href={"#"}
        isClose={isClose}
        icon={<MessageCircleMoreIcon />}
        tag={<Tag tagAmount="10" />}
      />
      <SidebarLink
        text={"My Group"}
        href={"#"}
        isClose={isClose}
        icon={<UsersRound />}
        tag={<Tag tagAmount="5" />}
      />
    </div>
  );
};
