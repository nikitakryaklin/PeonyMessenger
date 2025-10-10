import { SERVER } from "@/shared/config/api";
import { Socket, io } from "socket.io-client";

let socket: Socket | null = null;

export const useSocket = (userId: string | null): Socket => {
  if (!socket) {
    socket = io(SERVER, {
      query: { userId },
    });
  }

  return socket;
};
