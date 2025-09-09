import { ReactNode } from "react";
import { IHeading } from "./text-interface";
import clsx from "clsx";

export const CaphionTitle = ({
  text,
  className,
  ...titleProps
}: { text: string | ReactNode } & IHeading) => {
  return (
    <h4
      className={clsx(
        "text-[var(--black)]  leading-[140%] text-bold",
        className
      )}
      style={{ fontSize: `calc(1.5rem*var(--text-scale))` }}
      {...titleProps}
    >
      {text}
    </h4>
  );
};
