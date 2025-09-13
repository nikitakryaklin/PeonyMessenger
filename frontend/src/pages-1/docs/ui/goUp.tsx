import { LinkTitle } from "@/shared";

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
      <div className="w-30 p-4 h-full text-[var(--primery)] transition-colors duration-200 group-hover:bg-[var(--primery-light)] ">
        <LinkTitle text="Go up" className=" text-[var(--primery)] " />
      </div>
    </button>
  );
}
