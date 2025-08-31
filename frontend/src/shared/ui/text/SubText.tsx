import type { PropsWithChildren } from "react";
import { IText } from "./text-interface";
import clsx from "clsx";

export const SubText = ({
  text,
  className,
}: { text: string } & PropsWithChildren<IText>) => {
  return (
    <p
      className={clsx(
        "text-[var(--gray)]  leading-[140%] text-medium",
        className
      )}
      style={{ fontSize: `calc(0.875rem*var(--text-scale))` }}
    >
      {text}
    </p>
  );
};
