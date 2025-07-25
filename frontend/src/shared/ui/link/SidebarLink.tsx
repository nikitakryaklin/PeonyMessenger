import Link from "next/link";
import { HTMLProps, ReactNode } from "react";
import { CaphionTitle } from "../text";

export const SidebarLink = ({
  text,
  icon,
  className,
  href,
  tag,
}: {
  text: string;
  href: string;
  icon: ReactNode;
  tag?: ReactNode;
} & HTMLProps<HTMLLinkElement>) => {
  return (
    <Link
      href={href}
      className="group w-full h-14 px-[10%] flex justify-between items-center hover:bg-[var(--primery-light)] transition-colors duration-200"
    >
      <div className="flex items-center gap-1.5">
        {icon}
        <CaphionTitle text={text} />
      </div>
      {tag}
    </Link>
  );
};
