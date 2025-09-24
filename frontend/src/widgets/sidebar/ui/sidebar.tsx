"use client";

import { Logo } from "@/entities";
import { Button, IconButton } from "@/shared";
import clsx from "clsx";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { SidebarGroup } from "./sidebarGroup";
import { SIDEBAR_DATA } from "../config/sedibar-data";
import { m } from "motion/react";
import { Theme, useCreateChatModal } from "@/features";
import { useAdaptive } from "@/shared/providers/adaptiveProvider";

export const Sidebar = () => {
  const { isMobile } = useAdaptive();
  const [isClose, setIsClose] = useState(isMobile);

  const onOpenCreateChatModal = useCreateChatModal(
    (s) => s.onOpenCreateChatModal
  );

  useEffect(() => setIsClose(isMobile), [isMobile]);

  return (
    <m.aside
      className={clsx(
        "bg-[var(--white)] min-h-[100dvh] border-r border-[var(--gray)] flex flex-col"
      )}
      animate={{ width: isClose ? 74 : 400 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 23,
      }}
    >
      <div
        className={clsx(
          "h-24 flex px-3 bg-[var(--light-gray)] border-b border-[var(--gray)] items-center",
          !isClose && "justify-between",
          isClose && "justify-center"
        )}
      >
        {!isClose && <Logo />}
        <IconButton
          type="button"
          className={clsx(
            "hidden sm:block transition-transform duration-300",
            isClose && "rotate-180"
          )}
          icon={<ArrowLeft style={{ stroke: "var(--black)" }} />}
          onClick={() => setIsClose(!isClose)}
        />
      </div>

      <SidebarGroup
        className="border-b border-[var(--gray)]"
        isClose={isClose}
        data={[
          { ...SIDEBAR_DATA.chat[0], tag: "99" },
          { ...SIDEBAR_DATA.chat[1], tag: "9" },
        ]}
        button={
          <Button
            className={clsx(
              "bg-[var(--primery)] text-[1.25rem] leading-[140%] text-semibold mx-auto mt-2 hover:bg-[var(--primery-light)] overflow-hidden",
              !isClose && "w-[90%]",
              isClose && "text-[1.75rem] w-[60%]"
            )}
            text={isClose ? "+" : "+ Create chat"}
            onClick={onOpenCreateChatModal}
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

      <div className="h-16 smh-24 bg-[var(--light-gray)] mt-auto flex items-center justify-center">
        <Theme size={isClose ? "s" : "l"} />
      </div>
    </m.aside>
  );
};
