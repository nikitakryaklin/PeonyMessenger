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
        "text-[var(--grey)] text-[0.875rem] leading-[140%] text-medium",
        className
      )}
    >
      {text}
    </p>
  );
};
