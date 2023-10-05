import { useNavigate } from "react-router-dom";
import { axios } from "../..";
import { LoginProp, signUpProp } from "../../../typed/type";
import { useMutation } from "@tanstack/react-query";
import { useStore } from "../client";

//register
const register = async (payload: signUpProp) => {
  const { data } = await axios.post("/register", payload);
  return data;
};

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (payload: signUpProp) => register(payload),
    onSuccess: () => {
      navigate("/login");
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

//login
const login = async (payload: LoginProp) => {
  const { data } = await axios.post("/login", payload);
  return data;
};

export const useLogin = () => {
  const { setAuth   } = useStore();
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (payload: LoginProp) => login(payload),
    onSuccess: (data) => {
      if (data.success) {
        setAuth(data.token);
        navigate("/")
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
