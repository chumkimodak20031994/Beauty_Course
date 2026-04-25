import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "./Root";
import Error from "../pages/Error";
import Courses from "../pages/Courses";
import Order from "../pages/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "order/:id",
        element: <Order />,
      },
    ],
  },
]);
