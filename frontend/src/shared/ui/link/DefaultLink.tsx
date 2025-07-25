import clsx from "clsx";
import Link from "next/link";
import { HTMLProps } from "react";

export const DefaultLink = ({
  text,
  href,
  className,
}: {
  text: string;
  href: string;
  className: string;
}) => {
  return (
    <Link href={href} className={clsx("", className)}>
      {text}
    </Link>
  );
};
