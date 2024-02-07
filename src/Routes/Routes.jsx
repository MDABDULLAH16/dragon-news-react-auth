import Home from "../Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
