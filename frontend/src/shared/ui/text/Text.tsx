import { useCutomizeStore } from "@/pages-1/settings/ui/cutomizeStore";
import { IText } from "./text-interface";
import clsx from "clsx";

export const Text = ({ text, className }: { text: string } & IText) => {
  const currentIndex = useCutomizeStore((s) => s.currenIndex);

  return (
    <p
      className={clsx(
        `text-[var(--grey)] leading-[140%] text-medium`,
        className
      )}
      style={{ fontSize: `calc(1rem*${currentIndex})` }}
    >
      {text}
    </p>
  );
};
