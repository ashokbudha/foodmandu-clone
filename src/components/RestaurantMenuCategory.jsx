import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp} from "lucide-react"

const RestaurantMenuCategory = ({ category }) => {
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItem);
    setUpDownBtn("ChevronUp");
  };

  return (
    <div key={category.categoryId} id={category.categoryId} className="mb-2">
      <div
        className=" bg-[#FBF9F9] cursor-pointer flex justify-between"
        onClick={handleClick}
      >
        <h3 className=" py-3 px-4 ">{category.category}</h3>
        <h3 className=" py-3 px-4 text-gray-500">
            {showItem ? <ChevronUp/> :<ChevronDown />}
          
        </h3>
      </div>
      {category.items.map((item) => {
        return (
          showItem && (
            <div
              key={item.productId}
              className="px-4 py-3 border-t-1 border-gray-200"
            >
              <div className="flex justify-between">
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">{item.productDesc}</p>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default RestaurantMenuCategory;
