"use client";

import { AvatarCircle } from "@/entities";
import { useCapture, useWebRTC } from "@/features";
import {
  getImageUrl,
  IconButton,
  LOCAL_STORAGE,
  ROUTES,
  Text,
  Timer,
  useSocket,
  useStateWithCallback,
} from "@/shared";
import clsx from "clsx";
import { Camera, Mic, PhoneMissed } from "lucide-react";
import { video } from "motion/react-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const CallPage = ({
  roomId,
  callee,
  statusCurrent,
}: {
  statusCurrent: "calling" | "accept";
  roomId: string;
  callee: { id: string; userName: string; avatar: string | null };
}) => {
  const [status, setStatus] = useState<"calling" | "connect">("calling");

  const router = useRouter();

  const userId = localStorage.getItem(LOCAL_STORAGE.userDocumentId);

  const socket = useSocket(userId);

  //   const { videoRef, localMediaStream } = useCapture();
  const { clients, provideMediaRef } = useWebRTC(roomId);

  const onCandeledCall = (status: "calling" | "connect") => {
    if (status === "calling") {
      socket.emit("cancelCall", { toUserId: callee.id });
      router.replace(ROUTES.chat);
    }

    if (status === "connect") {
      socket.emit("stopCall", { toUserId: callee.id });
      router.replace(ROUTES.chat);
    }
  };

  useEffect(() => {
    // socket.on("acceptCall", ({ status }) => {
    //   setStatus(status);
    // });

    socket.on("declineCall", () => {
      router.push(ROUTES.chat);
    });

    socket.on("cancelCall", () => {
      router.push(ROUTES.chat);
    });

    socket.on("stopCall", () => {
      router.push(ROUTES.chat);
    });
  }, [socket]);

  return (
    <div className="h-[100dvh] relative p-2 flex flex-col justify-between items-start bg-transparent">
      <div className="h-20 bg-primery/20 rounded-full backdrop-blur-xs pl-2 pr-4 flex items-center gap-4">
        <div className="h-9/10">
          <AvatarCircle url={callee?.avatar} />
        </div>
        <div>
          <Text text={callee.userName} className="text-white font-bold" />
          {
            {
              calling: <Text text={"Call..."} className="text-white" />,
              connect: <Timer />,
            }[status]
          }
        </div>
      </div>

      <div className=" absolute inset-0 z-[-1] bg-amber-200">
        {clients?.map((clientId) => {
          return (
            <video
              key={clientId}
              ref={(noda) => {
                provideMediaRef(clientId, noda);
              }}
              autoPlay
              playsInline
              // muted={clientId !== "LOCAL_VIDEO"}
              className={clsx(
                "size-full object-cover",
                clientId === "LOCAL_VIDEO" &&
                  clients?.length === 2 &&
                  "w-60 h-80 rounded-2xl m-4 mt-25"
              )}
              style={{ transform: "scaleX(-1)" }}
            />
          );
        })}
        {/* <video
          // ref={peerMediaElements}
          // autoPlay
          // playsInline
          // className="size-full object-cover"
          // style={{ transform: "scaleX(-1)" }}
        /> */}
      </div>

      <div className="flex gap-4 mx-auto">
        <IconButton
          icon={<Mic color="var(--white)" />}
          type={"button"}
          className="size-20 aspect-square bg-primery/20 rounded-full backdrop-blur-xs hover:bg-primery/50"
        />
        <IconButton
          icon={<Camera color="var(--white)" />}
          type={"button"}
          className="size-20 aspect-square bg-primery/20 rounded-full backdrop-blur-xs hover:bg-primery/50"
        />
        <IconButton
          icon={<PhoneMissed color="var(--white)" />}
          type={"button"}
          className="size-20 aspect-square bg-red-500/50 rounded-full backdrop-blur-xs hover:bg-red-500/70"
          onClick={() => onCandeledCall(status)}
        />
      </div>
    </div>
  );
};
