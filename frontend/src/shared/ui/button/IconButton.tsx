import { HTMLAttributes, ReactNode } from "react";

export const IconButton = ({
  icon,
  ...buttonProps
}: { icon: ReactNode } & HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className=" min-w-11 min-h-11 items-center flex justify-center"
      {...buttonProps}
    >
      {icon}
    </button>
  );
};
