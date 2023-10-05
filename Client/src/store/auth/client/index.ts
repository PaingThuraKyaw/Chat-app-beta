import { create } from "zustand";
import Cookies from "js-cookie";

export interface AuthSlice {
  auth: string;
  setAuth: (auth: string) => void;
}

const intialState = "";

export const useStore = create<AuthSlice>((set) => {
  const cookie = Cookies.get("token");
  const intialAuth = cookie ? cookie : intialState;
  return {
    auth: intialAuth,
    setAuth: (auth) =>
      set((state) => {
        Cookies.set("token", auth, { expires: 1 });
        return { ...state, auth };
      }),
  };
});
