const express = require("express");
const sorcket = require("socket.io");
const cors = require("cors");
const format = require("./util/Format");
const bodyParser = require("body-parser");
const userRouter = require("./router/user.router");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const app = express();
const port = 3000;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//router
app.use(userRouter);

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

//mongose
mongoose
  .connect(process.env.MONGODB_URL)
  .then((_) => console.log("connect"))
  .catch((err) => console.log(err));

//socket
const socketServer = new sorcket.Server(server, {
  cors: "*",
});

app.get("/", (req, res) => {
  res.send("hello");
});

socketServer.on("connect", (socket) => {
  console.log("client connect");
  const BOT = "Chat BOT";
  socket.emit("message", format(BOT, "Welcome to my room"));
});
