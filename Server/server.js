const express = require("express");
const sorcket = require("socket.io");
const cors = require("cors");
const format = require("./util/Format");
const app = express();
const port = 3000;
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

const socketServer = sorcket(server, {
  cors: "*",
});

socketServer.on("connect", (socket) => {
  console.log("client connect");
  const BOT = "Chat BOT";
  socket.emit("message", format(BOT, "Welcome to my room"));
});
