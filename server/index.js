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
    console.log(`user - ${userId} connect to dialor - ${dialog}`);
    socket.join(dialog);
  });

  socket.on("message", (message) => {
    console.log(message);
    io.to(message.dialog).emit("message", { data: message });
  });

  socket.on("leaveFromDialog", ({ dialog }) => {
    socket.leave(dialog);
  });

  socket.on("startTyping", ({ dialog }) => {
    socket.to(dialog).emit("startTyping");
  });

  socket.on("endTyping", ({ dialog }) => {
    socket.to(dialog).emit("endTyping");
  });

  socket.on("disconnect", () => {
    console.log(`disconnect`);
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
