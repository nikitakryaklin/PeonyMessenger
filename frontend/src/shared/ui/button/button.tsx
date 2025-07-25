import clsx from "clsx";
import { HTMLProps, ReactNode } from "react";

export const Button = ({
  text,
  className,
  icon,
}: { text: string; icon?: ReactNode } & HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      className={clsx(
        "w-[80%] rounded-[0.5rem] h-10 flex justify-center items-center gap-0 text-[1rem]",
        className
      )}
    >
      {icon && icon}
      {text}
    </button>
  );
};
