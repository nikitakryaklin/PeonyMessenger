import { Button, ROUTES, Text } from "@/shared";
import { ArrowLeftFromLineIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export const SettingsWrapper = ({
  title,
  resetText,
  reset,
  option,
  children,
}: {
  title: string;
  resetText: string;
  reset: () => void;
  option: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className="w-full px-3 py-1 flex flex-col gap-5">
      <div className="flex justify-between h-10 items-center">
        <Link
          href={ROUTES.setting.home}
          className="flex gap-2 items-center cursor-pointer"
        >
          <ArrowLeftFromLineIcon stroke="var(--black)" />
          <Text text={title} />
        </Link>
        {option}
      </div>
      {children}
      <Button
        text={resetText}
        onClick={reset}
        className="h-11 border-2 border-[var(--red)] w-full"
      />
    </div>
  );
};

SettingsWrapper.button = ({ onActions }: { onActions: () => void }) => {
  return (
    <Button
      text="Save"
      onClick={onActions}
      className="max-w-25 gap-2"
      icon={<CheckIcon stroke="var(--black)" />}
    />
  );
};
