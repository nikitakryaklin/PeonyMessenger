import clsx from "clsx";
import { HTMLProps, ReactNode } from "react";

export function PageWrapper({
  children,
  className,
  ...divProps
}: { children: ReactNode } & HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "w-full h-full bg-[var(--white)] pt-3 border-r border-[var(--gray)]",
        className
      )}
      {...divProps}
    >
      {children}
    </div>
  );
}
