import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useChatStore from "../../store/chat/client";
import Chat from "./Chat/Chat";
import LeftSlide from "./LeftSlide/LeftSlide";
import { useEffect, useState } from "react";
import { SocketProp } from "../../typed/type";
const Room = () => {
  const { socket } = useChatStore();

  const [socketRes, setSocketRes] = useState<SocketProp[]>([]);
  const { state } = useLocation();
  const navigate = useNavigate();

  //socket call
  useEffect(() => {
    socket?.emit("join_room", { username: state.username, room: state.select });

    socket?.on("message", (data) => {
      setSocketRes((prev: SocketProp[]) => [...prev, data]);
    });

    return () => {
      if (socket) {
        socket?.disconnect();
      }
    };
  }, [socket, state.select, state.username]);

  //conditional for protect route
  if (!socket?.connect) {
    return <Navigate to={"/"} />;
  }

  const leaveRoom = () => {
    navigate("/");
  };


  console.log(socket.id);
  

  return (
    <div className=" grid grid-cols-12">
      <div className=" col-span-3">
        <LeftSlide leaveRoom={leaveRoom} state={state.select} />
      </div>
      <div className=" col-span-9">
        <Chat socketRes={socketRes} />
      </div>
    </div>
  );
};

export default Room;
