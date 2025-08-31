import { IText } from "./text-interface";
import clsx from "clsx";

export const Text = ({ text, className }: { text: string } & IText) => {
  return (
    <p
      className={clsx(
        `leading-[140%] text-medium`,
        !className && "text-[var(--gray)]",
        className
      )}
      style={{ fontSize: `calc(1rem*var(--text-scale))` }}
    >
      {text}
    </p>
  );
};
