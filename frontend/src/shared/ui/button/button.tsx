import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader } from "../loader/loader";

export const Button = ({
  text,
  className,
  icon,
  promise,
  ...buttonProps
}: {
  text: string;
  icon?: ReactNode;
  promise?: {
    loading: boolean;
  };
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={clsx(
        "w-[80%] rounded-[0.5rem] h-10 flex justify-center items-center gap-0 cursor-pointer whitespace-nowrap",
        className
      )}
      {...buttonProps}
    >
      {icon && icon}
      {!promise?.loading && <>{text}</>}
      {promise?.loading && <Loader />}
    </button>
  );
};
