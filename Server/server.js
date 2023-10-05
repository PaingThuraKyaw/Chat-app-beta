const express = require("express");
const socket = require("socket.io");
const cors = require("cors");
const format = require("./util/Format");
const bodyParser = require("body-parser");
const userRouter = require("./router/user.router");
const { default: mongoose } = require("mongoose");
const Format = require("./util/Format");
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

//socket
const io = socket(server, {
  cors: "*",
});

io.on("connection", (socket) => {
  console.log("client connect");
  const BOT = "BOT";
  const message = "Welcom to my room";
  socket.emit("message", Format(BOT, message));
  socket.broadcast.emit("message",Format(BOT,"User Join"))
});

//mongose
mongoose
  .connect(process.env.MONGODB_URL)
  .then((_) => console.log("connect"))
  .catch((err) => console.log("mongodb error", err));
