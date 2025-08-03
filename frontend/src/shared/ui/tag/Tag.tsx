import clsx from "clsx";
import { ReactNode } from "react";

export const Tag = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={clsx(
        "px-2 bg-[var(--primery)] rounded-4xl group-hover:bg-[var(--white)]  transition-colors duration-200",
        className
      )}
    >
      {children}
    </span>
  );
};
