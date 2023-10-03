import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../store/auth/client";

const Layout = () => {
  const { auth } = useStore();
  if (!auth) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
