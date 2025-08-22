import { AvatarCircle } from "@/entities";
import { getHour, ROUTES, SubText, Tag, Text } from "@/shared";
import Link from "next/link";
import { ReactNode } from "react";

export function ChatItem({
  chatId,
  avatar,
  userName,
  lastMessage,
  date,
  tag,
}: {
  chatId: string;
  avatar: string | undefined | null;
  userName: string;
  lastMessage: string;
  date: string | undefined;
  tag?: ReactNode;
}) {
  return (
    <Link
      href={ROUTES.chatById(chatId)}
      className="group w-full h-18 flex items-center hover:bg-[var(--primery-light)] px-5"
    >
      <div className="w-full grid grid-cols-[56px_1fr_40px] gap-2 h-14">
        <div className="h-full w-full relative">
          <AvatarCircle url={avatar} />
        </div>
        <div className="h-full w-full flex flex-col justify-center gap-2">
          <Text
            text={userName}
            className="font-bold max-w-4/5 overflow-hidden whitespace-nowrap overflow-ellipsis"
          />
          <SubText
            text={lastMessage}
            className="max-w-[99%] overflow-ellipsis whitespace-nowrap overflow-hidden"
          />
        </div>
        {date && (
          <>
            <div className="h-full w-full flex flex-col items-center">
              {getHour(date)}
              <Tag children={2} />
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
