import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

export const IconButton = ({
  icon,
  className,
  ...buttonProps
}: { icon: ReactNode } & HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={clsx(
        "w-11 h-11 items-center flex justify-center cursor-pointer",
        className
      )}
      {...buttonProps}
    >
      {icon}
    </button>
  );
};
