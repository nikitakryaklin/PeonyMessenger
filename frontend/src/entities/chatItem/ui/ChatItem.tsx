import { ROUTES } from "@/shared";
import Link from "next/link";

export function ChatItem({
  chatId,
  avatar,
  userName,
  lastMassage,
  date,
  tag,
}: {
  chatId: string | number;
  avatar: string;
  userName: string;
  lastMassage: string;
  date: string;
  tag?: string;
}) {
  return (
    <Link
      href={ROUTES.chatById(chatId)}
      className="group w-full h-18 flex items-center hover:bg-[var(--primery-light)] px-5"
    >
      <div className="w-full grid grid-cols-[48px_1fr_40px] gap-2 h-12">
        <div className="h-full w-full">avatar</div>
        <div className="h-full w-full">lastMessange</div>
        <div className="h-full w-full">time</div>
      </div>
    </Link>
  );
}
