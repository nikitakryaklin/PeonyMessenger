import express from "express";
const app = express();

const PORT = 4000;

import { createServer } from "http";

import cors from "cors";

import { Server } from "socket.io";

const http = createServer(app);

const io = new Server(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const users = new Map();

export const SOCKET_ACTIONS = {
  JOIN: "join-call-room",
  STOP_CALL: "stop-call",
  ADD_PEER: "add-peer",
  REMOVE_PEER: "remove-peer",
  RELAY_SDP: "relay-sdp",
  RELAY_ICE: "relay-ice",
  ICE_CANDIDATE: "ice-candidate",
  SESSION_DESCRIPTION: "session-description",
};

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  if (userId) {
    users.set(userId, socket.id);
  }

  socket.on("join", ({ dialog, userId }) => {
    socket.join(dialog);
  });

  socket.on("message", (message) => {
    io.to(message.dialog).emit("message", { data: message });
  });

  socket.on("leaveFromDialog", ({ dialog }) => {
    socket.leave(dialog);
  });

  socket.on("status", ({ dialog, status }) => {
    socket.to(dialog).emit("status", { status });
  });

  socket.on("startCall", ({ fromUserId, toUserId, callee }) => {
    const targetSocketId = users.get(toUserId);
    socket.to(targetSocketId).emit("incomingCall", {
      fromUserId,
      toUserId,
      callee,
      status: "calling",
    });
  });

  socket.on("cancelCall", ({ fromUserId, toUserId }) => {
    const targetSocketId = users.get(toUserId);
    socket.to(targetSocketId).emit("cancelCall", { status: "cancel" });
  });

  socket.on("declineCall", ({ fromUserId, toUserId }) => {
    const targetSocketId = users.get(toUserId);
    socket.to(targetSocketId).emit("declineCall", { status: "decline" });
  });

  socket.on("acceptCall", ({ toUserId, fromUserId }) => {
    const targetSocketId = users.get(toUserId);
    socket.to(targetSocketId).emit("acceptCall", { status: "accept" });
  });

  socket.on("stopCall", ({ toUserId }) => {
    const targetSocketId = users.get(toUserId);
    console.log(toUserId, targetSocketId);
    socket.to(targetSocketId).emit("stopCall", { status: "stop" });
  });

  socket.on(SOCKET_ACTIONS.JOIN, ({ roomId }) => {
    const { rooms: joinedRooms } = socket;

    if (Array.from(joinedRooms).includes(roomId)) {
      return;
    }

    const clients = Array.from(io.sockets.adapter.rooms.get(roomId) || []);
    clients.forEach((client) => {
      io.to(client).emit(SOCKET_ACTIONS.ADD_PEER, {
        peerId: socket.id,
        isCreateOffer: false,
      });

      socket.emit(SOCKET_ACTIONS.ADD_PEER, {
        peerId: client,
        isCreateOffer: true,
      });
    });

    socket.join(roomId);
  });

  socket.on(SOCKET_ACTIONS.STOP_CALL, () => {
    const { rooms } = socket;
    Array.from(rooms).forEach((roomId) => {
      const clients = Array.from(io.sockets.adapter.rooms.get(roomId) || []);

      clients.forEach((client) => {
        io.to(client).emit(SOCKET_ACTIONS.REMOVE_PEER, { peerId: socket.id });

        socket.emit(SOCKET_ACTIONS.REMOVE_PEER, {
          peerId: client,
        });
      });
      console.log("stop call");
      socket.leave(roomId);
    });
  });

  socket.on(SOCKET_ACTIONS.RELAY_SDP, ({ peerId, sessionDescription }) => {
    io.to(peerId).emit(SOCKET_ACTIONS.SESSION_DESCRIPTION, {
      peerId: socket.id,
      sessionDescription,
    });
  });

  socket.on(SOCKET_ACTIONS.RELAY_ICE, ({ peerId, iceCandidate }) => {
    io.to(peerId).emit(SOCKET_ACTIONS.ICE_CANDIDATE, {
      peerId: socket.id,
      iceCandidate,
    });
  });

  socket.on("disconnect", () => {
    console.log(`disconnect`);
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
