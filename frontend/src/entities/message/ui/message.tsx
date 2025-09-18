"use client";

import { AudioPlayer, getHour, getImageUrl, SubText, Text } from "@/shared";
import clsx from "clsx";
import { ReactNode } from "react";
import { TTypeMessage } from "../model/massage-interface";
import { AvatarSquare } from "@/entities/avatar/avatarSquare";

export const Message = ({
  message,
  className,
  title,
  createdAt,
  textModification,
}: {
  message: TTypeMessage;
  className: string;
  createdAt: string;
  title?: ReactNode;
  textModification?: {
    text: string;
    subText: string;
  };
}) => {
  const renderMessage = () => {
    switch (message.type) {
      case "text":
        return (
          <Text
            text={message.content.text}
            className="whitespace-normal break-words text-[var(--black)] max-w-9/10"
            {...(textModification && {
              style: { fontSize: textModification.text },
            })}
          />
        );
      case "voice":
        return (
          <AudioPlayer
            src={getImageUrl(message.content.url)}
            duration={message.content.duration}
          />
        );
      case "photo":
        return (
          <div className="size-40">
            <AvatarSquare url={getImageUrl(message.content.url)} />
          </div>
        );
      // case "file":
      //   return (
      //     <>
      //       {message.content.url} {message.content.name}
      //     </>
      //   );
      default:
        break;
    }
  };

  return (
    <div
      className={clsx(
        "bg-[var(--white)] flex gap-1 justify-between px-4 py-2 rounded-xl max-w-3/5 items-end",
        className
      )}
    >
      {title}
      {renderMessage()}
      <SubText
        text={getHour(createdAt)}
        {...(textModification && {
          style: { fontSize: textModification.subText },
        })}
      />
    </div>
  );
};

Message.left = "rounded-bl-none";
Message.right = "rounded-br-none";
