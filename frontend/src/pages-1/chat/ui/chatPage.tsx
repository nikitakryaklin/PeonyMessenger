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
  return (
    <DialogContainer
      headerInfo={{
        avatar: participant.about?.avatar?.[0].url || "",
        title: participant.username,
        description: "",
        options: (
          <div className="flex gap-4">
            <Phone stroke="var(--black)" />
            <Search stroke="var(--black)" />
            <Star stroke="var(--black)" />
            <EllipsisVertical stroke="var(--black)" />
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
