import { IHeading } from "./text-interface";
import clsx from "clsx";

export const MainTitle = ({ text, className }: { text: string } & IHeading) => {
  return (
    <h1
      className={clsx(
        "leading-[120%] text-bold text-[var(--black)]",
        className
      )}
      style={{ fontSize: `calc(3.5rem*var(--text-scale))` }}
    >
      {text}
    </h1>
  );
};
