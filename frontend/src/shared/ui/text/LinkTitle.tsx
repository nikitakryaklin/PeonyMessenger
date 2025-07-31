import { IHeading } from "./text-interface";
import clsx from "clsx";

export const LinkTitle = ({ text, className }: { text: string } & IHeading) => {
  return (
    <h5
      className={clsx(
        "text-[var(--black)] text-[1.25rem] leading-[140%] text-semibold",
        className
      )}
    >
      {text}
    </h5>
  );
};
