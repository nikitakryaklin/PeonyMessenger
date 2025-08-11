"use client";

import { useMessageGetByChatId } from "@/entities";
import { useChatGetById } from "@/features";
import { filtredParticipants, SubText } from "@/shared";
import { DialogContainer, DialogHeader } from "@/widgets";
import { EllipsisVertical, Phone, Search, Star } from "lucide-react";

export const ChatPage = ({ id }: { id: string }) => {
  const { chat, isPendingChat } = useChatGetById(id);
  const { messages, isPendingMessage } = useMessageGetByChatId(id);

  if (!chat) {
    return null;
  }

  const participant = filtredParticipants(chat?.participants)[0];

  return (
    <DialogContainer
      header={
        <DialogHeader
          info={{
            avatar: participant.about?.avatar?.[0].url || "",
            title: participant.username,
            description: <SubText text="last seen 4h" />,
          }}
          actions={
            <div className="flex gap-4">
              <Phone />
              <Search />
              <Star />
              <EllipsisVertical />
            </div>
          }
        />
      }
      type="chat"
      dialogId={chat.id}
      messages={messages}
    />
  );
};
