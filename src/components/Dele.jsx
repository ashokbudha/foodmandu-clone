// import React, { useState } from "react";

// const cuisines = [
//   "Indian", "Chinese", "Italian", "Thai", "Mo:Mo", "Nepali",
//   "Continental", "Bakery", "Asian", "Pizza", "Japanese",
//   "Multi Cuisine", "Vietnamese", "Biryani", "Burger"
// ];

// export default function CuisineFilterBox() {
//   const [showFilters, setShowFilters] = useState(false);
//   const [selectedCuisines, setSelectedCuisines] = useState([]);

//   const toggleCuisine = (cuisine) => {
//     setSelectedCuisines((prev) =>
//       prev.includes(cuisine)
//         ? prev.filter((c) => c !== cuisine)
//         : [...prev, cuisine]
//     );
//   };

//   const handleDone = () => {
//     setShowFilters(false);
//     console.log("Selected Cuisines:", selectedCuisines); // you can use the selectedCuisines variable
//   };

//   return (
//     <div className="relative inline-block text-left">
//       {/* Filter Button */}
//       <button
//         onClick={() => setShowFilters(!showFilters)}
//         className="border px-4 py-2 rounded shadow bg-white hover:bg-gray-50 flex items-center gap-2"
//       >
//         <span className="material-icons">filter_list</span> Filters
//       </button>

//       {/* Filter Box */}
//       {showFilters && (
//         <div className="absolute z-10 mt-2 w-72 bg-white border rounded shadow-lg p-4">
//           <div className="font-semibold text-sm uppercase text-gray-600 mb-2">Cuisine</div>
//           <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
//             {cuisines.map((cuisine) => (
//               <label key={cuisine} className="flex items-center gap-2 text-sm cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="accent-red-700"
//                   checked={selectedCuisines.includes(cuisine)}
//                   onChange={() => toggleCuisine(cuisine)}
//                 />
//                 {cuisine}
//               </label>
//             ))}
//           </div>

//           <div className="pt-3 text-right">
//             <button
//               onClick={handleDone}
//               className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded hover:bg-yellow-500"
//             >
//               Done
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }









import React, { useEffect, useState, useRef } from "react";
import RestaurantCard from "./RestaurantCard";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrollingComponent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const fetchedPages = useRef(new Set()); // ✅ Track which pages are fetched

  const fetchRestaurants = async (pageNumber) => {
    if (fetchedPages.current.has(pageNumber)) return; // ✅ Prevent duplicate fetch
    fetchedPages.current.add(pageNumber);

    try {
      const response = await fetch(
        `https://foodmandu.com/webapi/api/Vendor/GetVendors1?Cuisine=&DeliveryZoneId=1&IsFavorite=false&IsRecent=false&Keyword=&LocationLat=27.7026754&LocationLng=85.3191018&PageNo=${pageNumber}&PageSize=6&SortBy=4&VendorName=&VendorTags=%7B%7D&VendorTagsCSV=&search_by=restaurant`
      );

      if (!response.ok) throw new Error("Network response was not ok");
      
      const data = await response.json();
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
