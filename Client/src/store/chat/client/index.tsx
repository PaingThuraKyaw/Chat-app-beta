import { Socket } from "socket.io-client";
import { create } from "zustand";
import { SelectPropSelect } from "../../../typed/type";

interface chatProp {
  socket: Socket | null;
  setSocket: (socket: Socket | null) => void;
  resData: SelectPropSelect;
  setResData: (resData: SelectPropSelect) => void;
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
    resData: {
      username: "",
      select: "''",
    },
    setResData: (resData) =>
      set((state) => {
        return {
          ...state,
          resData,
        };
      }),
  };
});

export default useChatStore;
