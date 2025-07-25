import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { Id, Name, VendorListingWebImageName } = resData;
  return (
    <div className="flex flex-col gap-3 sub ">
      {/* <a href="#">
        <img src={VendorListingWebImageName} alt={Name}  className='h-35 md:h-50 w-[100%] object-cover'/>
      </a>
      <a href="#">
        <h3 className='text-secondary capitalize text-xl font-light tracking-wide'>{Name}</h3>
      </a> */}
      <Link to={"/restaurant/" + Id}>
        <img
          src={VendorListingWebImageName}
          alt={Name}
          className="h-35 md:h-50 w-[100%] object-cover"
        />
      </Link>
      <Link to={"/restaurant/" + Id}>
        <h3 className="text-secondary capitalize text-xl font-light tracking-wide">
          {Name}
        </h3>
      </Link>
    </div>
  );
};

export default RestaurantCard;
