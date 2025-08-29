import { IHeading } from "./text-interface";
import clsx from "clsx";

export const LinkTitle = ({ text, className }: { text: string } & IHeading) => {
  return (
    <h5
      className={clsx(
        "text-[var(--black)] leading-[140%] text-semibold",
        className
      )}
      style={{ fontSize: `calc(1.25rem*var(--text-scale))` }}
    >
      {text}
    </h5>
  );
};
