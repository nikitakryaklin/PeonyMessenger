import { getHour, SubText, Text } from "@/shared";
import clsx from "clsx";
import { ReactNode } from "react";

export const Message = ({
  text,
  className,
  title,
  createdAt,
}: {
  text: string;
  className: string;
  createdAt: string;
  title?: ReactNode;
}) => {
  return (
    <div
      className={clsx(
        "bg-[var(--white)] flex flex-col px-2 py-1 rounded-xl max-w-3/5",
        className
      )}
    >
      {title}
      <Text text={text} className="whitespace-normal break-words" />
      <SubText text={getHour(createdAt)} />
    </div>
  );
};

Message.left = "rounded-bl-none";
Message.right = "rounded-br-none";
