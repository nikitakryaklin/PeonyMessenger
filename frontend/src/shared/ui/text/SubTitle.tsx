import { IHeading } from "./text-interface";
import clsx from "clsx";

export const SubTitle = ({ text, className }: { text: string } & IHeading) => {
  return (
    <h3
      className={clsx(
        "text-[var(--black)] text-[2rem] leading-[140%] text-semibold",
        className
      )}
    >
      {text}
    </h3>
  );
};
