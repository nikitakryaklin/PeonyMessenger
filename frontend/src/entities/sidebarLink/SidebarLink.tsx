import Link from "next/link";
import { HTMLProps, ReactNode } from "react";
import { CaphionTitle } from "@/shared";
import clsx from "clsx";

export const SidebarLink = ({
  text,
  icon,
  className,
  isClose,
  href,
  tag,
}: {
  text: string;
  href: string;
  isClose: boolean;
  icon: ReactNode;
  tag?: ReactNode;
} & HTMLProps<HTMLLinkElement>) => {
  return (
    <Link
      href={href}
      className={clsx(
        "group w-full h-14 px-[10%] flex justify-between items-center hover:bg-[var(--primery-light)] transition-colors duration-200",
        isClose && "justify-center"
      )}
    >
      <div className="flex items-center gap-1.5">
        <div className={clsx("flex items-center justify-center")}>
          {icon}
          {/* {isClose && <>{tag}</>} */}
        </div>
        {!isClose && <CaphionTitle text={text} />}
      </div>
      {!isClose && <>{tag}</>}
    </Link>
  );
};
