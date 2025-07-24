import { IHeading } from "./text-interface";
import clsx from "clsx";

export const CaphionTitle = ({
  text,
  className,
}: { text: string } & IHeading) => {
  return (
    <h4
      className={clsx(
        "text-[var(--black)] text-[1.5rem] leading-[140%] text-bold",
        className
      )}
    >
      {text}
    </h4>
  );
};
