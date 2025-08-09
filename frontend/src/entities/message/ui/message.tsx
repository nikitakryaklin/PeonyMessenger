import { Text } from "@/shared";
import clsx from "clsx";
import { ReactNode } from "react";

export const Message = ({
  text,
  className,
  title,
}: {
  text: string;
  className: string;
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
    </div>
  );
};

Message.left = "rounded-bl-none";
Message.right = "rounded-br-none";
