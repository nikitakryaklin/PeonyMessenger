import { ReactNode } from "react";
import { Message } from "./message";
import { SubText, Text } from "@/shared";
import clsx from "clsx";

export function MessageContainer({
  text,
  isIncoming,
  info,
}: {
  text: string;
  isIncoming: boolean;
  info?: {
    avatar: ReactNode;
    title: string;
  };
}) {
  return (
    <div className={clsx("flex gap-2 items-end", !isIncoming && "justify-end")}>
      {info?.avatar}
      <Message
        text={text}
        className={clsx(
          isIncoming && Message.left,
          !isIncoming && Message.right
        )}
        title={
          info?.title && <SubText className="font-bold" text={info.title} />
        }
      />
    </div>
  );
}
