import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Link
//  from "react-router-dom"

const RestaurantMenu = () => {
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
  console.log(restaurantInfo);
  // console.log(restaurantMenu);
  

  if (Object.keys(restaurantInfo).length === 0 || restaurantMenu.length === 0) {
    return <h1 className="text-center mt-10 text-xl">Loading...</h1>;
  }

  return (
    <div className="">
      {/* hero banner */}
      <section
        style={{
          backgroundImage: `url(${restaurantInfo.VendorListingWebImageName|| restaurantInfo.VendorCoverImageName || restaurantInfo.ImagePath+restaurantInfo.ImageName}) `,
          // backgroundImage: `url(${restaurantInfo.VendorCoverImageName} ) `,

          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "30vw", // optional, just to make it visible
          // height:'auto',
        }}
        className="text-white flex flex-col  justify-end  "
      >
        <div className="  container   h-[200px]  flex flex-col gap-4">
          {/* title section*/}
          <div className="flex gap-4">
            {/* logo */}
            <div className="h-[96px] w-[128px] ">
              <img src={restaurantInfo.VendorLogoImageName} alt="" />
            </div>
            {/* title  */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl">Kathmandu Marriot</h1>
              <div>
                <h3>Indian</h3>
                <h3>Naxal Kathmandu</h3>
              </div>
            </div>
          </div>
          {/* minium order addition service */}
          <div className=" flex justify-between ">
            {/* minimun order */}
            <div className="flex flex-col">
              <span>Minimun order</span> <span>Rs. .00</span>
            </div>
            {/* additon service charger */}
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span>Additional Service charge</span> <span>N/A</span>
              </div>
              <div className="flex flex-col">
                <span>Addidition Vat</span> <span>N/A</span>
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
          <button>love</button>
        </div>
      </section>
      {/* Menu */}
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
                  <li key={category.categoryId} className=" py-1 border-b-1 border-gray-100">
                    <a href={"#"+category.categoryId}>{category.category}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-[60%]">
            {/* search box*/}
            <div className="my-8">
              <input type="search" placeholder="Search food items" className="border-1 border-gray-300 w-[100%] px-3 py-2"/>
              </div>
            {/*food item card  */}
            <div>
             
              {restaurantMenu.map((category) => {
                return (
                  <div key={category.categoryId} id={category.categoryId}>
                    <h3 className="bg-[#FBF9F9] py-3 px-4">{category.category}</h3>
                    {category.items.map((item) => {
                      return <div key={item.productId} className="px-4 py-3 border-t-1 border-gray-200">
                        <div className="flex justify-between">
                          <p>{item.name}</p>
                          <p>{item.price}</p>
                        </div>
                        <div><p className="text-gray-500 text-sm">{item.productDesc}</p></div>
                      </div>;
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantMenu;
