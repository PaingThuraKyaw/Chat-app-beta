import { Navigate, useNavigate } from "react-router-dom";
import useChatStore from "../../store/chat/client";
import Chat from "./Chat/Chat";
import LeftSlide from "./LeftSlide/LeftSlide";
import { useEffect, useState } from "react";
import { SocketProp } from "../../typed/type";
const Room = () => {
  const { socket, resData } = useChatStore();

  const [socketRes, setSocketRes] = useState<SocketProp[]>([]);
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

    return () => {
      if (socket) {
        socket?.disconnect();
      }
    };
  }, [resData.select, resData.username, socket]);

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
        <LeftSlide leaveRoom={leaveRoom} select={resData.select} />
      </div>
      <div className=" col-span-9">
        <Chat socket={socket} socketRes={socketRes} />
      </div>
    </div>
  );
};

export default Room;
