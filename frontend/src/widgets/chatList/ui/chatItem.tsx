import { AvatarCircle } from "@/entities";
import { ROUTES, SubText, Tag, Text } from "@/shared";
import dayjs from "dayjs";
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
  date: string;
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
          <Text text={userName} className="font-bold" />
          <SubText
            text={lastMessage}
            className="max-w-[99%] overflow-ellipsis whitespace-nowrap overflow-hidden"
          />
        </div>
        <div className="h-full w-full flex flex-col items-center">
          {dayjs(date).format("HH:mm")}
          <Tag children={2} />
        </div>
      </div>
    </Link>
  );
}
