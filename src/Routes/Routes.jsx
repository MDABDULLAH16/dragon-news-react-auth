import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{ path: "/", element: <Home></Home> }],
  },
]);

export default routes;
