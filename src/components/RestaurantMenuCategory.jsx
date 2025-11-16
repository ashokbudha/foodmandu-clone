import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp, CirclePlus } from "lucide-react";
import {addItem} from "../utility/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenuCategory = ({ category }) => {
  const [showItem, setShowItem] = useState(false);
  

  const dispatch = useDispatch();

  const handleClick = () => {
    setShowItem(!showItem);
  };

  return (
    <div key={category.categoryId} id={category.categoryId} className="mb-2 cursor-pointer">
      <div
        className=" bg-[#FBF9F9] cursor-pointer flex justify-between"
        onClick={handleClick}
      >
        <h3 className=" py-3 px-4 ">{category.category}</h3>
        <h3 className=" py-3 px-4 text-gray-500">
          {showItem ? <ChevronUp /> : <ChevronDown />}
        </h3>
      </div>
      {category.items.map((item) => {
        return (
          showItem && (
            <div
              key={item.productId}
              className="px-4 py-3 border-t-1 border-gray-200 relative"
            >
              <div className="flex justify-between pr-3">
                <p>{item.name}</p>
                <p>
                  {" "}
                  {new Intl.NumberFormat("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(item.price)}
                </p>
              </div>
              <button className="absolute right-1 top-5 cursor-pointer " onClick={()=>{
                dispatch(addItem(item));
              }}>
                <CirclePlus className="w-4 h-4 text-green-900" />
              </button>
              <div>
                <p className="text-gray-500 text-sm pr-10">
                  {item.productDesc}
                </p>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default RestaurantMenuCategory;
