"use client";

import { AvatarCircle } from "@/entities";
import { Button, CaphionTitle, Text } from "@/shared";
import { PhoneCallIcon, PhoneMissed } from "lucide-react";
import { useCalling } from "./callProvider";

export const IncomingCall = () => {
  const { onDecline, onAcceptCall, callee } = useCalling();

  if (!callee) return null;

  return (
    <div className="m-auto bg-white h-full w-full md:w-100 md:h-100 rounded-2xl p-4 flex flex-col items-center justify-between">
      <CaphionTitle text={"Incoming call"} />
      <div className="w-1/2">
        <AvatarCircle url={callee?.avatar} />
      </div>
      <Text text={callee?.userName} />
      <div className="w-full flex gap-2">
        <Button
          icon={<PhoneCallIcon size={15} />}
          text="Accept"
          className="bg-green flex gap-2"
          onClick={onAcceptCall}
        />
        <Button
          icon={<PhoneMissed size={15} />}
          text="Decline"
          className="bg-red flex gap-2"
          onClick={onDecline}
        />
      </div>
    </div>
  );
};
