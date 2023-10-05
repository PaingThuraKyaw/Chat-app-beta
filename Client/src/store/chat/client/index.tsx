import { Socket } from "socket.io-client";
import { create } from "zustand";
interface chatProp {
  socket: Socket | null;
  setSocket: (socket: Socket | null) => void;
}

const useChatStore = create<chatProp>((set) => {
  return {
    socket: null,
    setSocket: (socket) =>
      set((state) => {
        return {
          ...state,
          socket,
        };
      }),
  };
});

export default useChatStore;
