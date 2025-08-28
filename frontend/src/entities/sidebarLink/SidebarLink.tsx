import Link from "next/link";
import { HTMLProps, ReactNode } from "react";
import { CaphionTitle, LinkTitle } from "@/shared";
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
  const render = (isClose: boolean) => {
    if (isClose) {
      return (
        <>
          <div className={clsx("flex items-center justify-center relative")}>
            {icon}
            {tag}
          </div>
        </>
      );
    }

    if (!isClose) {
      return (
        <>
          <div className="flex items-center gap-1.5">
            <div className={clsx("flex items-center justify-center")}>
              {icon}
            </div>
            <LinkTitle
              text={text}
              className="whitespace-nowrap text-[var(--black)]"
            />
          </div>
          {tag}
        </>
      );
    }
  };

  return (
    <Link
      href={href}
      className={clsx(
        "group w-full h-14 px-[5%] flex justify-between items-center hover:bg-[var(--primery-light)] transition-colors duration-200",
        isClose && "justify-center",
        className
      )}
    >
      {render(isClose)}
    </Link>
  );
};
