const express = require("express");
const app = express();

PORT = 4000;

const { createServer } = require("http");

const cors = require("cors");

const { Server } = require("socket.io");

const http = createServer(app);

const io = new Server(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
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

  socket.on("disconnect", () => {
    console.log(`disconnect`);
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
