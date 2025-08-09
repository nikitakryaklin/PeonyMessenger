import { AvatarCircle } from "@/entities";
import { SubText, Text } from "@/shared";
import { ReactNode } from "react";

export const DialogHeader = ({
  info,
  actions,
}: {
  info: { avatar: string; title: string; description?: ReactNode };
  actions: ReactNode;
}) => {
  return (
    <div className="bg-[var(--white)] h-24 w-full flex justify-between items-center px-5">
      <div className="flex gap-4 items-center h-3/5">
        <AvatarCircle url={info.avatar} />
        <div className="flex flex-col">
          <Text text={info.title} />
          {info.description}
        </div>
      </div>
      {actions}
    </div>
  );
};
