import { SocketProp } from "../../../typed/type";

const Chat = ({ socketRes }: { socketRes: SocketProp[] | undefined }) => {
  console.log(socketRes);

  return (
    <div className=" bg-gray-100  h-screen">
      {socketRes?.map((socket) => (
        <div>
          <p className="">{socket.username}</p>
          <p>{socket.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Chat;
