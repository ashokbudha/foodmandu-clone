import React from "react";
import Home from "./pages/Home";
import AllRestaurant from "./pages/AllRestaurant";
import { createBrowserRouter } from "react-router-dom";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Restaurant",
    element: <AllRestaurant />,
  },
]);

export default AppRouter;
