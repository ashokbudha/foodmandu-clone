import React, { useEffect, useState, useRef } from "react";
import RestaurantCard from "./RestaurantCard";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const InfiniteScrollingComponent = ({ selectedFilters }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [page, setPage] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const fetchedPages = useRef(new Set()); // ✅ Track which pages are fetched
  

  const url = "https://foodmandu.com/webapi/api/Vendor/GetVendors1";

  const fetchRestaurants = async (pageNumber) => {
    if (fetchedPages.current.has(pageNumber)) return; // ✅ Prevent duplicate fetch
    fetchedPages.current.add(pageNumber);

    const cuisinesCSV = selectedFilters.join(",");
    const vendorTagsObj = selectedFilters.reduce((acc, cur) => {
      acc[cur] = true;
      return acc;
    }, {});

    const params = {
      Cuisine: "",
      DeliveryZoneId: 1,
      IsFavorite: false,
      IsRecent: false,
      Keyword: "",
      LocationLat: 27.7026754,
      LocationLng: 85.3191018,
      PageNo: pageNumber,
      PageSize: 6,
      SortBy: 4,
      VendorName: "",
      VendorTags: vendorTagsObj,
      VendorTagsCSV: cuisinesCSV,
      filtertags: cuisinesCSV,
      search_by: "restaurant",
    };

    try {
      // const response= await axios.get(`https://foodmandu.com/webapi/api/Vendor/GetVendors1?Cuisine=&DeliveryZoneId=1&IsFavorite=false&IsRecent=false&Keyword=&LocationLat=27.7026754&LocationLng=85.3191018&PageNo=${pageNumber}&PageSize=6&SortBy=4&VendorName=&VendorTags=%7B%7D&VendorTagsCSV=&search_by=restaurant`);
      const response = await axios.get(url, { params });

      const data = response?.data;
      console.log(`Fetched page ${pageNumber}`, data);

      if (!Array.isArray(data) || data.length === 0) {
        setHasMore(false);
        return;
      }

      setRestaurants((prev) => [...prev, ...data]);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    console.log(selectedFilters)
    console.log("useEffect selectedFilters")
    setRestaurants([]);
    setHasMore(true);
    fetchedPages.current.clear();
    setPage(1);
  }, [selectedFilters]);

  useEffect(() => {
    if (page === null) return;
    
    fetchRestaurants(page);
    
  }, [page]);

  const fetchMoreData = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <InfiniteScroll
      dataLength={restaurants.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4 className="text-center py-4 text-gray-500">Loading...</h4>}
      endMessage={
        <p className="text-center py-4 text-gray-400">
          <b>No more restaurants to show.</b>
        </p>
      }
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 border-b-1 border-gray-300">
        {restaurants.map((restaurant) => (
          // write higher order component for restarurantcard need to add more info to card at bottom for allrestaurant page

          <RestaurantCard
            key={`${restaurant.Id}-${restaurant.Name}`}
            resData={restaurant}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default InfiniteScrollingComponent;

// import React, { useEffect, useState, useRef } from "react";
// import RestaurantCard from "./RestaurantCard";
// import InfiniteScroll from "react-infinite-scroll-component";

// const InfiniteScrollingComponent = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const fetchedPages = useRef(new Set()); // ✅ Track which pages are fetched

//   const fetchRestaurants = async (pageNumber) => {
//     if (fetchedPages.current.has(pageNumber)) return; // ✅ Prevent duplicate fetch
//     fetchedPages.current.add(pageNumber);

//     try {
//       const response = await fetch(
//         `https://foodmandu.com/webapi/api/Vendor/GetVendors1?Cuisine=&DeliveryZoneId=1&IsFavorite=false&IsRecent=false&Keyword=&LocationLat=27.7026754&LocationLng=85.3191018&PageNo=${pageNumber}&PageSize=6&SortBy=4&VendorName=&VendorTags=%7B%7D&VendorTagsCSV=&search_by=restaurant`
//       );

//       if (!response.ok) throw new Error("Network response was not ok");
//       const data = await response.json();
//       console.log(`Fetched page ${pageNumber}`, data);

//       if (!Array.isArray(data) || data.length === 0) {
//         setHasMore(false);
//         return;
//       }

//       setRestaurants((prev) => [...prev, ...data]);
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchRestaurants(page);
//   }, [page]);

//   const fetchMoreData = () => {
//     setPage((prev) => prev + 1);
//   };

//   return (
//     <InfiniteScroll
//       dataLength={restaurants.length}
//       next={fetchMoreData}
//       hasMore={hasMore}
//       loader={<h4 className="text-center py-4 text-gray-500">Loading...</h4>}
//       endMessage={
//         <p className="text-center py-4 text-gray-400">
//           <b>No more restaurants to show.</b>
//         </p>
//       }
//     >
//       <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 border-b-1 border-gray-300">
//         {restaurants.map((restaurant) => (

// // write higher order component for restarurantcard need to add more info to card at bottom for allrestaurant page

//           <RestaurantCard
//             key={`${restaurant.Id}-${restaurant.Name}`}
//             resData={restaurant}
//           />
//         ))}
//       </div>
//     </InfiniteScroll>
//   );
// };

// export default InfiniteScrollingComponent;
