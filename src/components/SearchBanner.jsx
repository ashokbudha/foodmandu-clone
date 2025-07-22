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
