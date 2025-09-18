import { ReactNode } from "react";
import { Message } from "./message";
import { SubText } from "@/shared";
import clsx from "clsx";
import { TMessage } from "../model/massage-interface";

export function MessageContainer({
  message,
  isIncoming,
  Ref,
  info,
}: {
  message: TMessage;
  isIncoming: boolean;
  Ref?: (el: HTMLDivElement | null) => void;
  info?: {
    avatar: ReactNode;
    title: string;
  };
}) {
  return (
    <div
      className={clsx(
        "flex gap-2 items-end mt-3",
        !isIncoming && "justify-end"
      )}
      ref={Ref}
    >
      {isIncoming && <>{info?.avatar}</>}
      <Message
        message={message}
        createdAt={message.createdAt}
        className={clsx(
          isIncoming && Message.left,
          !isIncoming && Message.right
        )}
        title={
          info?.title &&
          isIncoming && <SubText className="font-bold" text={info.title} />
        }
      />
    </div>
  );
}
