import { MainTitle } from "@/shared";
import { ROUTES } from "@/shared/routes/routes";
import { Flower } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={ROUTES.home} className="flex h-full items-center gap-2">
      <Flower size={40} style={{ stroke: "var(--primery)" }} />
      <MainTitle text="Peony" />
    </Link>
  );
};
