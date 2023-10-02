import { Navigate, Outlet } from "react-router-dom";

const Layout = () => {
  const token = false;

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
