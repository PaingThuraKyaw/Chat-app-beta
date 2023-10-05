import { useEffect, useState } from "react";
import { useStore } from "../../store/auth/client";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { auth } = useStore();
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (auth) {
      return setIsDone(true);
    }
  }, [auth]);

  if (isDone) {
    return <Navigate to={"/"} />;
  }

  if (!isDone && !auth) {
    return <Outlet />;
  }
};

export default AuthLayout;
