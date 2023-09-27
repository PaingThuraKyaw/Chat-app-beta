import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Layout from "./layout/Layout";
import Room from "./pages/room";
import Login from "./pages/auth/Login";

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
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
