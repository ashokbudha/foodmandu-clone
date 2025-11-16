import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Heart } from "lucide-react";
import RestaurantMenu from "../components/RestaurantMenu";

// import Link
//  from "react-router-dom"

const RestaurantMenuPage = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState([]);

  const { resId } = useParams();

  const fetchRestaurantMenu = async () => {
    const res = await fetch(
      `https://foodmandu.com/webapi/api/v2/Product/GetVendorProductsBySubCategoryV2?VendorId=${resId}&show=`
    );
    const data = await res.json();
    // console.log("res menu",data)
    setRestaurantMenu(data);
  };

  const fetchRestaurantInfo = async () => {
    const res = await fetch(
      `https://foodmandu.com/webapi/api/vendor/GetVendorDetail?VendorId=${resId}`
    );
    const data = await res.json();
    // console.log("res info",data[0]);
    setRestaurantInfo(data[0]);
  };

  useEffect(() => {
    fetchRestaurantMenu();
    fetchRestaurantInfo();
  }, [resId]);
  // console.log(restaurantInfo);
  // console.log(restaurantMenu);

  if (Object.keys(restaurantInfo).length === 0 || restaurantMenu.length === 0) {
    return <h1 className="text-center mt-10 text-xl">Loading...</h1>;
  }

  return (
    <div className="">
      {/* hero banner */}
      <section
        style={{
          backgroundImage: `url(${
            restaurantInfo.VendorCoverImageName ||
            restaurantInfo.VendorListingWebImageName ||
            restaurantInfo.ImagePath + restaurantInfo.ImageName
          }) `,
          // backgroundImage: `url(${restaurantInfo.VendorCoverImageName} ) `,

          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "30vw", // optional, just to make it visible
          // height:'auto',
        }}
        className="text-white flex flex-col  justify-end  relative before:content-[''] before:absolute before:inset-0 before:bg-black/50  before:z-0  "
      >
        <div className="  container   h-[200px]  flex flex-col gap-4 relative z-10">
          {/* title section*/}
          <div className="flex gap-4">
            {/* logo */}
            <div className="h-[96px] w-[128px] ">
              <img src={restaurantInfo.VendorLogoImageName} alt="" />
            </div>
            {/* title  */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl">{restaurantInfo.Name}</h1>
              <div>
                <h3 className="">{restaurantInfo.Cuisine}</h3>
                <h3>{restaurantInfo.Address1}</h3>
              </div>
            </div>
          </div>
          {/* minium order addition service */}
          <div className=" flex justify-between ">
            {/* minimun order */}
            <div className="flex flex-col">
              <span>Minimun order</span>{" "}
              <span>
                Rs.{" "}
                {restaurantInfo.MinimumOrderAmount == 0
                  ? ".00"
                  : restaurantInfo.MinimumOrderAmount}
              </span>
            </div>
            {/* additon service charger */}
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span>Additional Service charge</span>{" "}
                <span>
                  {restaurantInfo.ServiceCharge == 0
                    ? "N/A"
                    : restaurantInfo.ServiceCharge}
                </span>
              </div>
              <div className="flex flex-col">
                <span>Addidition Vat</span>{" "}
                <span>
                  {restaurantInfo.ServiceCharge == 0
                    ? "N/A"
                    : restaurantInfo.ServiceCharge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* buttons section */}
      <section className="py-4 border-b-1 border-gray-200 ">
        <div className="container flex  justify-between items-center ">
          <ul className="flex gap-8">
            <li>
              <button className=" text-green-300 ">Menu</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Other Branches</button>
            </li>
          </ul>
          {/* favourte btn */}
          <button className=" text-gray-400 border-1 border-gray-300 px-4 py-2">
            <Heart className="p-1 " />
          </button>
        </div>
      </section>
      {/* Menu */}
      <RestaurantMenu restaurantMenu = {restaurantMenu}/>
    </div>
  );
};

export default RestaurantMenuPage;
