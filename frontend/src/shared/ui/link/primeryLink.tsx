import Link from "next/link";
import { HTMLProps, ReactNode } from "react";
import { Text } from "../text";
import clsx from "clsx";

export const PrimeryLink = ({
  url,
  text,
  icon,
  className,
  ...linkProps
}: {
  url: string;
  text: string;
  icon: ReactNode;
} & HTMLProps<HTMLAnchorElement>) => {
  return (
    <Link
      href={url}
      className={clsx(
        "w-full h-12 flex items-center justify-center gap-2 border-[var(--primery)] border-2 rounded-xl hover:bg-[var(--primery)] transition-colors duration-150",
        className
      )}
      {...linkProps}
    >
      {icon}
      <Text text={text} />
    </Link>
  );
};
