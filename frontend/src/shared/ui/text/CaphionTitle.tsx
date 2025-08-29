import { IHeading } from "./text-interface";
import clsx from "clsx";

export const CaphionTitle = ({
  text,
  className,
}: { text: string } & IHeading) => {
  return (
    <h4
      className={clsx(
        "text-[var(--black)]  leading-[140%] text-bold",
        className
      )}
      style={{ fontSize: `calc(1.5rem*var(--text-scale))` }}
    >
      {text}
    </h4>
  );
};
