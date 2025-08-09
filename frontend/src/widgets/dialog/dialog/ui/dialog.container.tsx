import { ReactNode } from "react";
import { DialogForm } from "./dialog.form";
import { AvatarCircle, MessageContainer } from "@/entities";

export const DialogContainer = ({ header }: { header: ReactNode }) => {
  return (
    <div className="flex flex-col h-full">
      {header}
      <div className="px-5 pb-2 flex flex-col flex-1 overflow-y-scroll gap-4 bg-amber-100 justify-end">
        <MessageContainer
          text="income"
          isIncoming={true}
          info={{
            avatar: (
              <AvatarCircle url={""} className="size-13 max-w-13 max-h-13" />
            ),
            title: "title",
          }}
        />
        <MessageContainer
          text="incomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincomeincome"
          isIncoming={true}
        />
        <MessageContainer text="send" isIncoming={false} />
      </div>
      <DialogForm />
    </div>
  );
};
