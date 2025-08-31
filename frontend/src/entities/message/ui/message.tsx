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
        "bg-[var(--white)] flex gap-1 justify-between px-4 py-2 rounded-xl max-w-3/5 items-end",
        className
      )}
    >
      {title}
      <Text
        text={text}
        className="whitespace-normal break-words text-[var(--black)] max-w-9/10"
      />
      <SubText text={getHour(createdAt)} />
    </div>
  );
};

Message.left = "rounded-bl-none";
Message.right = "rounded-br-none";
