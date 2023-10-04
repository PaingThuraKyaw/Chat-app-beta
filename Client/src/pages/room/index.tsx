import { useStore } from "../../store/auth/client";
import Chat from "./Chat/Chat";
import LeftSlide from "./LeftSlide/LeftSlide";

const Room = () => {
  const { res } = useStore();
  console.log(res);

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
