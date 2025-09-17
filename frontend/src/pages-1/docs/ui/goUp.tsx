import { LinkTitle } from "@/shared";
import { ChevronUp } from "lucide-react";

export function GoUp({
  isVisible,
  onScroll,
}: {
  isVisible: boolean;
  onScroll: () => void;
}) {
  if (!isVisible) return null;

  return (
    <button
      onClick={onScroll}
      className="group w-1/6 left-0 top-24 fixed h-screen cursor-pointer"
    >
      <div className="w-35 p-4 h-full text-[var(--primery)] transition-colors duration-200 group-hover:bg-[var(--primery-light)] ">
        <div className="flex gap-2 items-center">
          <ChevronUp />
          <LinkTitle
            text="Go up"
            className=" text-[var(--primery)] text-nowrap"
          />
        </div>
      </div>
    </button>
  );
}
