import { ChangeEvent, useState, FormEvent } from "react";
import { SocketProp } from "../../../typed/type";
import { Socket } from "socket.io-client";

const Chat = ({
  socketRes,
  socket,
}: {
  socketRes: SocketProp[];
  socket: Socket | null;
}) => {
  const [message, setMessage] = useState("");

  const sendingMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim().length > 0) {
      socket?.emit("massage_send", message);
      setMessage("");
    }
  };

  if (!socketRes.length) {
    return <h3>Loading ...</h3>;
  }

  
  return (
    <div className=" pt-5  relative bg-gray-100  h-screen">
      {/*  */}
      {socketRes?.map((socket) => (
        <div
          className=" bg-[#e9ecee] mb-5 rounded-lg p-3 w-1/3 ml-5 "
          key={socket.setup_time}
        >
          <p className=" italic text-sm">{socket.username}</p>
          <p className="  text-xl">{socket.message}</p>
        </div>
      ))}

      {/* search box */}
      <form
        onSubmit={sendingMessage}
        className=" absolute px-5  bottom-6 w-full flex"
      >
        <input
          type="text"
          value={message}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target.value)
          }
          className=" w-full outline-none text-black/90 py-3 px-5 rounded-md bg-coffee/60 "
        />
        <button>blah</button>
      </form>
    </div>
  );
};

export default Chat;
