import { IHeading } from "./text-interface";
import clsx from "clsx";

export const MainTitle = ({ text, className }: { text: string } & IHeading) => {
  return (
    <h1
      className={clsx(
        "text-[3.5rem] leading-[120%] text-bold text-[var(--black)]",
        className
      )}
    >
      {text}
    </h1>
  );
};
