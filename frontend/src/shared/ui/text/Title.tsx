import { IHeading } from "./text-interface";
import clsx from "clsx";

export const Title = ({ text, className }: { text: string } & IHeading) => {
  return (
    <h2
      className={clsx(
        "text-[var(--black)] text-[2.5rem] leading-[120%] text-semibold",
        className
      )}
    >
      {text}
    </h2>
  );
};
