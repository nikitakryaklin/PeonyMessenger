import { SubText } from "@/shared";
import { DialogContainer, DialogHeader } from "@/widgets";
import { EllipsisVertical, Phone, Search, Star } from "lucide-react";

export const ChatPage = ({ id }: { id: string }) => {
  return (
    <DialogContainer
      header={
        <DialogHeader
          info={{
            avatar: "",
            title: `Chat - ${id}`,
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
    />
  );
};
