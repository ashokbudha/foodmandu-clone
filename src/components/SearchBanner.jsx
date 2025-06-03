// import React, { useState } from "react";
// // import Banner-1 from "../assets/images/2.png";
// import Banner_1 from "../assets/images/2.png";
// import Banner_2 from "../assets/images/3.png";
// import Banner_3 from "../assets/images/4.png";

// export default function SearchBanner() {
//   const [searchText, setSearchText] = useState("");

//   return (
//     <section className="relative bg-gray-100 py-16 overflow-hidden  h-[90vh] flex">
//       <div className="md:w-[80vw] xl:w-[60vw]  md:m-auto ">
//         {/* Background Images */}
//         <div className="absolute inset-0 pointer-events-none">
//           <img
//             src={Banner_1}
//             alt=""
//             className="absolute top-[20%] left-[10%] w-40 hidden sm:block scale-125"
//           />
//           <img
//             src={Banner_2}
//             alt=""
//             className="absolute top-15 right-[10%] w-36 hidden sm:block scale-200"
//           />
//           <img
//             src={Banner_3}
//             alt=""
//             className="absolute bottom-[10%] left-[20%] w-32 hidden sm:block scale-175"
//           />
//           <img
//             src={Banner_2}
//             alt=""
//             className="absolute bottom-[-5%] right-[25%] w-40 hidden md:block scale-225"
//           />
//         </div>

//         {/* Foreground Content */}
//         <div className="relative z-10 container mx-auto px-4 ">
//           <h2 className="text-4xl md:text-3xl text-center  mb-6 text-gray-600">
//             Order food from the widest range of restaurants.
//           </h2>

//           <div className="flex flex-col md:flex-row items-center justify-center">
//             <input
//               type="search"
//               placeholder="Restaurant or Cuisine (leave it blank to browse all)"
//               className="w-full md:w-2/3 py-3 px-4 text-gray-700 text-lg border bg-white border-gray-300 focus:outline-none"
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//             />

//             <button
//               className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 text-lg transition"
//               onClick={() => console.log("Searching:", searchText)}
//             >
//               Find Restaurants
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react'
import Banner_1 from "../assets/images/2.png";
import Banner_2 from "../assets/images/3.png";
import Banner_3 from "../assets/images/4.png";

const SearchBanner = () => {
  return (
    <section className='bg-gray-100 w-[100vw] h-[100vh] flex justify-center items-center'>
        {/* background */}
        <div className=' z-0 '>
            <img src={Banner_1} alt="" className='absolute top-[12%] hidden md:block left-[5%] scale-65' />
            <img src={Banner_2} alt=""  className='absolute top-[10%] hidden sm:block right-[5%]'/>
            <img src={Banner_3} alt="" className='absolute bottom-[-5%] block sm:hidden lg:block  right-[5%] sm:right-[15%]'/>
            <img src={Banner_2} alt="" className='absolute bottom-[8%] hidden sm:block left-[21%] scale-90'/>
        </div>
        {/* foreground */}
        <div className='container relative flex flex-col  justify-center items-center   h-[95vh] gap-6'>
            <h2 className='text-3xl  text-gray-600 text-center px-4 '>Order food from the widest range of restaurants.</h2>
            <div className='flex flex-col md:flex-row gap-4 md:gap-0 w-[100%] justify-center items-center'>
                <input type="search" placeholder='Restaurant or Cuisine (leave it blank to browse all)' className='py-2 px-4 border-1 border-gray-300 md:border-0 bg-white  w-[90%] sm:w-[80%] md:w-[60%] outline-none text-gray-500'/>
                <button className='bg-primary hover:bg-yellow-400 py-2 px-4 transition-colors duration-100'>Find Restaurants</button>
            </div>

        </div>
    </section> 
  )
}

export default SearchBanner
