import { IText } from "./text-interface";
import clsx from "clsx";

export const Text = ({ text, className }: { text: string } & IText) => {
  return (
    <p
      className={clsx(
        `text-[var(--grey)] leading-[140%] text-medium`,
        className
      )}
      style={{ fontSize: `calc(1rem*var(--text-scale))` }}
    >
      {text}
    </p>
  );
};
