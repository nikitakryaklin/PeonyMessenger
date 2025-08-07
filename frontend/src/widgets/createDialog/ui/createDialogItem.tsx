import { AvatarCircle } from "@/entities";
import { CheckBox, Text } from "@/shared";
import clsx from "clsx";
import { HTMLProps } from "react";

export const CreateDialogItem = ({
  avatarURL,
  userName,
  isActive,
  className,
  ...divProps
}: {
  avatarURL: string | undefined;
  userName: string;
  isActive?: boolean;
  className?: string;
} & HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        "w-full flex h-18 py-2 items-center gap-2",
        // isActive && "bg-[var(--primery-light)]",
        className
      )}
      {...divProps}
    >
      <AvatarCircle url={avatarURL} className="" />
      <Text text={userName} className="font-bold flex-1" />
      <CheckBox isActive={isActive} className="mr-2" />
    </div>
  );
};
