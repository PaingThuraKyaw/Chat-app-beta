import { BsFillChatSquareTextFill, BsFillPeopleFill } from "react-icons/bs";

const LeftSlide = ({
  state,
  leaveRoom,
}: {
  state: string;
  leaveRoom: () => void;
}) => {
  return (
    <div className=" bg-[#262626] relative  h-screen ">
      <div className=" pt-5">
        <div className=" px-5 pb-3 text-xl font-semibold flex items-center space-x-1 text-white/80">
          <h3>Room name</h3>
          <BsFillChatSquareTextFill />
        </div>
        <p className=" mx-2 mt-3 rounded-md  py-3  px-3 font-[500]  bg-[#686868] text-white/90">
          {state} Chat
        </p>
      </div>

      {/* user  */}
      <div className=" mt-7  border-t pt-5 border-[#686868] mx-5">
        <div className="pb-3 text-xl font-semibold flex items-center space-x-1 text-white/80">
          <h3>Join User</h3>
          <BsFillPeopleFill />
        </div>
      </div>

      <div className=" absolute bottom-5">
        <button onClick={leaveRoom} className="">
          Log out
        </button>
      </div>
    </div>
  );
};

export default LeftSlide;
