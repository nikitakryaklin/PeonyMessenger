import { IText } from "./text-interface";
import clsx from "clsx";

export const Text = ({ text, className }: { text: string } & IText) => {
  return (
    <p
      className={clsx(
        "text-[var(--grey)] text-[1rem] leading-[140%] text-medium",
        className
      )}
    >
      {text}
    </p>
  );
};
