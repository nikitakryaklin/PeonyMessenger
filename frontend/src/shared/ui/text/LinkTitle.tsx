import { useCutomizeStore } from "@/pages-1/settings/ui/cutomizeStore";
import { IHeading } from "./text-interface";
import clsx from "clsx";

export const LinkTitle = ({ text, className }: { text: string } & IHeading) => {
  const currentIndex = useCutomizeStore((s) => s.currenIndex);

  return (
    <h5
      className={clsx(
        "text-[var(--black)] text-[1.25rem] leading-[140%] text-semibold",
        className
      )}
      style={{ fontSize: `calc(1rem*${currentIndex})` }}
    >
      {text}
    </h5>
  );
};
