import clsx from "clsx";
import { HTMLAttributes, HTMLProps, ReactNode } from "react";

export const IconButton = ({
  icon,
  className,
  type = "button",
  ...buttonProps
}: {
  icon: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
} & HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      className={clsx(
        "w-11 h-11 items-center flex justify-center cursor-pointer",
        className
      )}
      type={type}
      {...buttonProps}
    >
      {icon}
    </button>
  );
};
