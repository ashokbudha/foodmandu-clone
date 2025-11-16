import Home from "./pages/Home";
import AllRestaurant from "./pages/AllRestaurant";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import RestaurantMenuPage from "./pages/RestaurantMenuPage";
import Footer from "./components/Footer"
import { Provider } from "react-redux";
import appStore from "./utility/appstore";
import Cart from "./components/Cart";


const AppLayout = ()=>{
  return(
    <Provider store={appStore}>
      <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </Provider>
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
        element:<RestaurantMenuPage/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
    ]
  }
]);

export default App;
