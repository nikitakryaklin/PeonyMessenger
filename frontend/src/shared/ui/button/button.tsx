import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader } from "../loader/loader";
import { Text } from "../text";

export const Button = ({
  text,
  className,
  textClasses,
  icon,
  promise,
  ...buttonProps
}: {
  text: string;
  textClasses?: string;
  icon?: ReactNode;
  promise?: {
    loading: boolean;
    color?: string;
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
      {!promise?.loading && <Text text={text} className={textClasses} />}
      {promise?.loading && (
        <Loader {...(promise.color ? { color: promise.color } : {})} />
      )}
    </button>
  );
};
