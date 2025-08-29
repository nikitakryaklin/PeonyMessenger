import { IHeading } from "./text-interface";
import clsx from "clsx";

export const SubTitle = ({ text, className }: { text: string } & IHeading) => {
  return (
    <h3
      className={clsx(
        "text-[var(--black)]  leading-[140%] text-semibold",
        className
      )}
      style={{ fontSize: `calc(2rem*var(--text-scale))` }}
    >
      {text}
    </h3>
  );
};
