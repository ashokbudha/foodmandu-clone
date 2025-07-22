import React from "react";
import Home from "./pages/Home";
import AllRestaurant from "./pages/AllRestaurant";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import RestaurantMenu from "./pages/RestaurantMenu";
import Footer from "./components/Footer"


const AppLayout = ()=>{
  return(
    <div className="app">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const App = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/restaurant",
        element:<AllRestaurant/>,
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }
    ]
  }
]);

export default App;
