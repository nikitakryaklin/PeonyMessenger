"use client";

import { useCalling, useChatGetById, useUserAbout } from "@/features";
import {
  filtredParticipants,
  IconButton,
  LOCAL_STORAGE,
  ROUTES,
} from "@/shared";
import { DialogContainer } from "@/widgets";
import { EllipsisVertical, Phone, Search, Star } from "lucide-react";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";

export const ChatPage = ({ id }: { id: string }) => {
  const { chat, isPendingChat } = useChatGetById(id);

  const { data: user } = useUserAbout();

  const router = useRouter();

  const { onStartCall } = useCalling();

  const onCall = (
    toUserId: string,
    roomId: string,
    userName: string,
    avatar: string
  ) => {
    onStartCall(toUserId, {
      roomId: roomId,
      userName: userName,
      avatar: avatar,
    });
    router.replace(
      ROUTES.callById(
        roomId +
          `?to=${participant.documentId}&userName=${
            participant.username
          }&avatar=${participant.about?.avatar?.[0].url || ""}&status=calling`
      )
    );
  };

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
          <div className="flex gap-4 items-center">
            <IconButton
              onClick={() =>
                onCall(
                  participant.documentId,
                  nanoid(),
                  localStorage.getItem(LOCAL_STORAGE.userName) || "",
                  user?.avatar?.[0].url || ""
                )
              }
              icon={<Phone stroke="var(--black)" />}
              type="button"
            />
            {/* <Search stroke="var(--black)" /> */}
            {/* <Star stroke="var(--black)" /> */}
            {/* <EllipsisVertical stroke="var(--black)" /> */}
          </div>
        ),
      }}
      type="chat"
      dialogId={chat.id}
      params={id}
    />
  );
};
