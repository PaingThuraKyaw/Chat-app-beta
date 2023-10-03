import { create } from "zustand";
import Cookies from "js-cookie";
type Auth = {
  token: string;
};

export interface AuthSlice {
  auth: Auth | string;
  setAuth: (auth: string) => void;
}

const intialState = { token: "" };

export const useStore = create<AuthSlice>((set) => {
  const cookie = Cookies.get("token");
  const intialAuth = cookie ? cookie : intialState;
  return {
    auth: intialAuth,
    setAuth: (auth) =>
      set((state) => {
        Cookies.set("token", auth);
        return { ...state, auth };
      }),
  };
});
