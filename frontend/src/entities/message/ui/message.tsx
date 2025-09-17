"use client";

import { AudioPlayer, getHour, getImageUrl, SubText, Text } from "@/shared";
import clsx from "clsx";
import { style } from "motion/react-client";
import { ReactNode, useEffect, useState } from "react";
import { TTypeMessage } from "../model/massage-interface";

export const Message = ({
  text,
  type,
  className,
  title,
  createdAt,
  textModification,
}: {
  text: any;
  type: TTypeMessage;
  className: string;
  createdAt: string;
  title?: ReactNode;
  textModification?: {
    text: string;
    subText: string;
  };
}) => {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (type === "voice") {
      const text_json = JSON.parse(text);
      console.log(text_json);
      // setAudio(JSON.parse(text));
      setAudio(text_json);
    }
  }, []);

  return (
    <div
      className={clsx(
        "bg-[var(--white)] flex gap-1 justify-between px-4 py-2 rounded-xl max-w-3/5 items-end",
        className
      )}
    >
      {title}
      {
        {
          text: (
            <Text
              text={text}
              className="whitespace-normal break-words text-[var(--black)] max-w-9/10"
              {...(textModification && {
                style: { fontSize: textModification.text },
              })}
            />
          ),
          // voice: (
          //   <AudioPlayer
          //     //@ts-ignore
          //     src={getImageUrl(audio.url)}
          //     //@ts-ignore
          //     duration={audio.duration}
          //   />
          // ),
          voice: <>dsa</>,
          photo: <>dsa</>,
        }[type]
      }
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
