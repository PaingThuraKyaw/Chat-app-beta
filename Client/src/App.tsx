import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Layout from "./layout/Layout";
import Room from "./pages/room";
import Login from "./pages/auth/Login";
import AuthLayout from "./layout/auth/Auth";
import UserSelectRoom from "./pages/auth/UserSelectRoomChat/UserSelectRoom";

//color
// --black --> #262626
// --black/50 ---> #686868
// ==green  ---> #44d7b6

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <UserSelectRoom />,
        },
        {
          path: "/room",
          element: <Room />,
        },
        {
          path: "*",
          element: <Room />,
        },
      ],
    },
    {
      path: "/signUp",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <SignUp />,
        },
      ],
    },
    {
      path: "/login",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
