import clsx from "clsx";
import { HTMLAttributes, HTMLProps, ReactNode } from "react";

export const DropDown = ({
  children,
  isOpen,
  className,
  ...divProps
}: {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
} & HTMLProps<HTMLDivElement>) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={clsx("bg-[var(--white)] p-2 rounded-xl absolute", className)}
      {...divProps}
    >
      {children}
    </div>
  );
};
