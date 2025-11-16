import React from 'react'
import RestaurantMenuCategory from "../components/RestaurantMenuCategory";


const RestaurantMenu = ({restaurantMenu}) => {
  return (
      <section>
        <div className="container flex gap-10 items-start ">
          <div className="  w-[15%] sticky top-[4rem] ">
            {/* titlte */}
            <h2 className="py-8">Category</h2>
            <ul>
              {/* <li>
                <a href="">signature pizza</a>
              </li> */}
              {restaurantMenu.map((category) => {
                return (
                  <li
                    key={category.categoryId}
                    className=" py-1 border-b-1 border-gray-100"
                  >
                    <a href={"#" + category.categoryId}>{category.category}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-[60%]">
            {/* search box*/}
            <div className="my-8">
              <input
                type="search"
                placeholder="Search food items"
                className="border-1 border-gray-300 w-[100%] px-3 py-2"
              />
            </div>
            {/*food item card  */}
            <div>
              {restaurantMenu.map((category) => {
                return <RestaurantMenuCategory category={category}  key={category.categoryId}/>;
              })}
            </div>
          </div>
        </div>
      </section>
  )
}

export default RestaurantMenu;
