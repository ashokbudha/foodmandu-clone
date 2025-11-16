import React from "react";
import Logo from "../assets/images/1.png";
import { Search, Bell, User, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);

  return (
    <div className="border-b-1   fixed border-gray-100 w-[100vw] bg-white z-20">
      <header className="container justify-between py-4 items-center md:justify-between   ">
        {/* logo */}
        <div className="">
          {/* <a href=""> */}
          
          <Link to="/"><img src={Logo} alt="" className="h-8" /></Link>

            
          {/* </a> */}
        </div>
        {/* buttons */}
        <div className="">
          <ul className="flex gap-4">
            <li>
              <Search className="block md:hidden text-gray-500  cursor-pointer hover:text-red-700" />
            </li>
            <li>
              <Bell className="text-gray-500 cursor-pointer hover:text-red-700" />
            </li>
            <li>
              <User className="text-gray-500 cursor-pointer hover:text-red-700" />
            </li>
            <Link to="/cart">
            <li className="flex ">
              <ShoppingBag className="text-gray-500 cursor-pointer hover:text-red-700" /> <span className="text-green-600">{cartItems.length}</span>
            </li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
