"use client";

import { LOCAL_STORAGE, ROUTES, useSocket } from "@/shared";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface ICallee {
  avatar: string;
  roomId: string;
  userName: string;
}

interface ICallingContext {
  isCalling: boolean;
  callerId: string;
  callee: ICallee | null;
  onDecline: () => void;
  onAcceptCall: () => void;
  onStartCall: (callerId: string, callee: ICallee) => void;
}

const CallingContext = createContext<ICallingContext | undefined>(undefined);

export function useCalling() {
  const ctx = useContext(CallingContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}

export const CallingProvider = ({ children }: { children: ReactNode }) => {
  const [isCalling, setIsCalling] = useState(false);
  const [callerId, setCallerId] = useState("");
  const [callee, setCalee] = useState<ICallee | null>(null);

  const userId = localStorage.getItem(LOCAL_STORAGE.userDocumentId);

  const socket = useSocket(userId);

  const router = useRouter();

  const onStartCall = (toUserId: string, callee: ICallee) => {
    socket?.emit("startCall", {
      fromUserId: userId,
      toUserId: toUserId,
      status: "calling",
      callee: callee,
    });
  };

  const onDecline = () => {
    setIsCalling(false);
    socket?.emit("declineCall", {
      status: "decline",
      fromUserId: userId,
      toUserId: callerId,
    });
  };

  const onAcceptCall = () => {
    setIsCalling(false);

    router.push(
      ROUTES.callById(
        callee?.roomId +
          `?to=${callerId}&userName=${callee?.userName}&avatar=${callee?.avatar}&status=accept`
      )
    );

    socket.emit("acceptCall", {
      status: "accept",
      fromUserId: userId,
      toUserId: callerId,
    });
  };

  useEffect(() => {
    socket.on("incomingCall", ({ fromUserId, toUserId, callee }) => {
      setIsCalling(true);
      setCallerId(fromUserId);
      setCalee(callee);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("cancelCall", () => {
      setIsCalling(false);
    });
  }, [socket]);

  return (
    <CallingContext.Provider
      value={{
        isCalling,
        callee,
        callerId,
        onDecline,
        onStartCall,
        onAcceptCall,
      }}
    >
      {children}
    </CallingContext.Provider>
  );
};
