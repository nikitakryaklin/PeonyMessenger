import Link from "next/link";
import { ReactNode } from "react";

export default function Chatlayout({
  children,
  panel,
}: {
  children: ReactNode;
  panel: ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div>{panel}</div>
    </div>
  );
}
