"use client";

import { useAdaptive } from "@/shared/providers/adaptiveProvider";
import clsx from "clsx";
import { HTMLProps, ReactNode, useEffect } from "react";

export function PageWrapper({
  children,
  className,
  ...divProps
}: { children: ReactNode } & HTMLProps<HTMLDivElement>) {
  const { setCurrentPage, isMobile, page } = useAdaptive();

  useEffect(() => {
    setCurrentPage("page");
  }, []);

  return (
    <div
      className={clsx(
        "sm:block w-full sm:max-w-96 h-full bg-[var(--white)] pt-3 border-r border-[var(--gray)]",
        isMobile && page !== "page" && "hidden",
        className
      )}
      {...divProps}
    >
      {children}
    </div>
  );
}
