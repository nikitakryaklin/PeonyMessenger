import { Button, ROUTES, Text } from "@/shared";
import { ArrowLeftFromLineIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export const SettingsWrapper = ({
  title,
  option,
  children,
}: {
  title: string;
  option: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className="w-full px-3 py-1 flex flex-col">
      <div className="flex justify-between h-10 items-center mb-5">
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
