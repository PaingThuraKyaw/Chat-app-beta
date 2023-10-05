import useChatStore from "../../store/chat/client";
import Chat from "./Chat/Chat";
import LeftSlide from "./LeftSlide/LeftSlide";
import { useEffect, useState } from "react";
const Room = () => {
  const { socket } = useChatStore();

  const [socketRes, setSocketRes] = useState();

  useEffect(() => {
    socket?.on("message", (data) => {
      console.log(data);
      setSocketRes(data);
    });
  }, [socket]);

  console.log(socketRes);
  

  return (
    <div className=" grid grid-cols-12">
      <div className=" col-span-2">
        <LeftSlide />
      </div>
      <div className=" col-span-10">
        <Chat />
      </div>
    </div>
  );
};

export default Room;
