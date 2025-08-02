import { IChat } from "@/features";
import { getImageUrl, ROUTES } from "@/shared";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// import { IChat } from "../model/chat-interface";

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
      <div className="w-full grid grid-cols-[48px_1fr_40px] gap-2 h-12">
        <div className="h-full w-full">
          <Image
            src={avatar ? getImageUrl(avatar) : "./defaultAvatar.png"}
            width={40}
            height={40}
            alt="avatar"
          />
        </div>
        <div className="h-full w-full">lastMessange</div>
        <div className="h-full w-full">time</div>
      </div>
    </Link>
  );
}
