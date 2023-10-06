import { Navigate, useNavigate } from "react-router-dom";
import useChatStore from "../../store/chat/client";
import Chat from "./Chat/Chat";
import LeftSlide from "./LeftSlide/LeftSlide";
import { useEffect, useState } from "react";
import { SocketProp, UserProp } from "../../typed/type";
const Room = () => {
  const { socket, resData } = useChatStore();

  const [socketRes, setSocketRes] = useState<SocketProp[]>([]);
  const [user, setUser] = useState<UserProp[]>([]);
  const navigate = useNavigate();

  //socket call
  useEffect(() => {
    socket?.emit("join_room", {
      username: resData.username,
      room: resData.select,
    });

    socket?.on("message", (data) => {
      setSocketRes((prev: SocketProp[]) => [...prev, data]);
    });

    socket?.on("sameuser", (data) => {
      console.log(data);
      //  setUser((prev) => [...prev, ...data]);
      const prevUser = [...user];
      data?.map((use: UserProp) => {
        const index = prevUser.findIndex((prev) => prev.id === use.id);
        console.log(index);

        if (index !== -1) {
          prevUser[index] = { ...prevUser[index], ...data };
        } else {
          prevUser.push(use);
        }

        setUser(prevUser);
      });
    });

    return () => {
      if (socket) {
        socket?.disconnect();
      }
    };
  }, [resData.select, resData.username, socket, setUser]);

  console.log(user);

  //conditional for protect route
  if (!socket?.connect) {
    return <Navigate to={"/"} />;
  }

  //leaveRoom fn
  const leaveRoom = () => {
    navigate("/");
  };

  return (
    <div className=" grid grid-cols-12">
      <div className=" col-span-3">
        <LeftSlide user={user} leaveRoom={leaveRoom} select={resData.select} />
      </div>
      <div className=" col-span-9">
        <Chat socket={socket} socketRes={socketRes} />
      </div>
    </div>
  );
};

export default Room;
