import { ReactNode, RefObject } from "react";
import { Message } from "./message";
import { SubText } from "@/shared";
import clsx from "clsx";
import { TTypeMessage } from "../model/massage-interface";

export function MessageContainer({
  text,
  type,
  isIncoming,
  createdAt,
  Ref,
  info,
}: {
  text: string;
  type: TTypeMessage;
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
        type={type}
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
