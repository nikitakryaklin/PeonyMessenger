import { ReactNode, RefObject } from "react";
import { Message } from "./message";
import { SubText } from "@/shared";
import clsx from "clsx";

export function MessageContainer({
  text,
  isIncoming,
  createdAt,
  Ref,
  info,
}: {
  text: string;
  isIncoming: boolean;
  createdAt: string;
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
        text={text}
        createdAt={createdAt}
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
