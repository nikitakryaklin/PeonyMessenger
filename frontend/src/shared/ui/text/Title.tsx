import { IHeading } from "./text-interface";
import clsx from "clsx";

export const Title = ({ text, className }: { text: string } & IHeading) => {
  return (
    <h2
      className={clsx(
        "text-[var(--black)]  leading-[120%] text-semibold",
        className
      )}
      style={{ fontSize: `calc(2.5rem*var(--text-scale))` }}
    >
      {text}
    </h2>
  );
};
