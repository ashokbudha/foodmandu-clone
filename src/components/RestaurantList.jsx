import React from "react";
import RestaurantCard from "../components/RestaurantCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { resData } from "../utility/mockData";

const RestaurantList = () => {
  return (
    <section>
      <div className="container gap-4 flex-col py-16">
        {/* litle and view-all button */}
        <div className="flex justify-between items-center w-[100%]">
          <h3 className="sub-title">Featured restaurants</h3>
          {/* <a href="" className='sub-title font-light capitalize flex  items-center '>View all<ArrowRight className=''/></a> */}
          <Link
            to="/Restaurant"
            className="sub-title font-light capitalize flex  items-center "
          >
            {" "}
            View all
            <ArrowRight className="" />
          </Link>
        </div>
        {/* restaurant cards */}
        <div className="w-[100%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resData.map((restaurant) => {
            return <RestaurantCard key={restaurant?.Id} resData={restaurant} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RestaurantList;
