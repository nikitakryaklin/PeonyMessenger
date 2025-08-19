"use client";

import { useChatGetById } from "@/features";
import { filtredParticipants } from "@/shared";
import { DialogContainer } from "@/widgets";
import { EllipsisVertical, Phone, Search, Star } from "lucide-react";

export const ChatPage = ({ id }: { id: string }) => {
  const { chat, isPendingChat } = useChatGetById(id);

  if (!chat || !chat.participants) {
    return null;
  }
  const participant = filtredParticipants(chat?.participants)[0];
  console.log(participant);
  return (
    <DialogContainer
      headerInfo={{
        avatar: participant.about?.avatar?.[0].url || "",
        title: participant.username,
        options: (
          <div className="flex gap-4">
            <Phone />
            <Search />
            <Star />
            <EllipsisVertical />
          </div>
        ),
      }}
      type="chat"
      dialogId={chat.id}
      params={id}
      participants={chat.participants}
    />
  );
};
