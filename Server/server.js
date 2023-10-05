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

//add user
const users = [];

const saveUser = (id, username, room) => {
  const user = { id, username, room };
  return users.push(user);
};

//disconnect user
const disconnectUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index)[0];
  }
};

//socket
const io = new socket.Server(server, {
  cors: "*",
});

io.on("connection", (socket) => {
  const BOT = "BOT";
  //userJoin
  socket.on("join_room", ({ username, room }) => {
    saveUser(socket.id, username, room);
    socket.join(room);
    socket.emit("message", Format(BOT, "Welcome to my room"));
    socket.broadcast.to(room).emit("message", Format(BOT, "User Join"));
  });

  socket.on("disconnect", () => {
    const User = disconnectUser(socket.id);
    console.log(User);
    if (User) {
      io.to(User.room).emit("message", Format(BOT, "User is Left"));
    }
  });
});

//mongose
mongoose
  .connect(process.env.MONGODB_URL)
  .then((_) => console.log("connect"))
  .catch((err) => console.log("mongodb error", err));
