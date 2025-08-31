import { Button } from "@/shared";
import { LogOut } from "lucide-react";
import { useLogoutMutation } from "../api/useLogoutMutation";
import clsx from "clsx";

export const Logout = ({ className }: { className?: string }) => {
  const { logout, isLoading } = useLogoutMutation();

  return (
    <Button
      onClick={() => logout()}
      disabled={isLoading}
      className={clsx(
        "border-none gap-2 justify-start px-[5%] text-[var(--red)] hover:bg-neutral-300",
        className
      )}
      text={!isLoading ? "Logout" : "Logout..."}
      icon={<LogOut size={20} style={{ stroke: "var(--red)" }} />}
      textClasses="text-[var(--red)]"
    />
  );
};
