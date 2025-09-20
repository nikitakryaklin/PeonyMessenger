"use client";

import { useGetGroupById } from "@/features";
import { filtredParticipants } from "@/shared";
import { DialogContainer } from "@/widgets";
import { EllipsisVertical, Search, Star } from "lucide-react";

export const GroupPage = ({ id }: { id: string }) => {
  const { group, isGroupPending } = useGetGroupById(id);

  if (!group || !group.participants) {
    return null;
  }
  // const participant = filtredParticipants(group?.participants)[0];
  return (
    <DialogContainer
      headerInfo={{
        avatar: "",
        title: group.name,
        description: `${group.participants.length} members`,
        options: (
          <div className="flex gap-4">
            <Search stroke="var(--black)" />
            <Star stroke="var(--black)" />
            <EllipsisVertical stroke="var(--black)" />
          </div>
        ),
      }}
      type="group"
      dialogId={group.id}
      params={id}
    />
  );
};
