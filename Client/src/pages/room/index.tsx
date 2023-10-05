import { useLocation } from "react-router-dom";
import useChatStore from "../../store/chat/client";
import Chat from "./Chat/Chat";
import LeftSlide from "./LeftSlide/LeftSlide";
import { useEffect, useState } from "react";
import { SocketProp } from "../../typed/type";
const Room = () => {
  const { socket } = useChatStore();

  const [socketRes, setSocketRes] = useState<SocketProp[]>([]);
  const { state } = useLocation();

  useEffect(() => {
    socket?.on("message", (data) => {
      setSocketRes((prev: SocketProp[]) => [...prev, data]);
    });
  }, [socket]);

  console.log(socketRes);

  return (
    <div className=" grid grid-cols-12">
      <div className=" col-span-3">
        <LeftSlide state={state} />
      </div>
      <div className=" col-span-9">
        <Chat socketRes={socketRes} />
      </div>
    </div>
  );
};

export default Room;
