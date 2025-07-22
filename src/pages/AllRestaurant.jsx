import React from 'react'
import { useState } from 'react'
import InfiniteScrollingComponent from '../components/InfiniteScrollingComponent'
import Header from '../components/Header'
import { MapPin} from 'lucide-react'
import CuisineFilter from "../components/CuisineFilter"




const AllRestaurant = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [appliedFilters,setAppliedFilters] =useState([]);


  return (
    <section>
      {/* make change to header so that searchbar is seen in allRestaurant page  */}
      {/* <Header/> */}
      {/* title section */}
      <section className='pt-24 bg-[#fafafa] border-b-1 border-gray-200'>
        <div className="container py-8 justify-between items-center">
          <div className="">
            <h2 className="text-secondary text-3xl font-light">Restaurants and Stores</h2>
          </div>
          <div className="flex flex-col items-end gap-1">
            <button className=' border-gray-300 py-2 px-4 border-1 w-50 bg-white text-gray-400 text-start font-light '>Kathmandu</button>
            <div className='flex items-center  text-sm font-light gap-0.5'>
                <MapPin size={14} className='text-gray-500 '/>
                <p className='italic'>M8RH+V39, Daphe Marga, Kathmandu 44600, Nepal</p>
                <a href="" className='text-green-700'>Change</a>
            </div>
          </div>
        </div>
      </section>
      {/* filter and sort section */}
      <section>
        <div className="container justify-between py-8 items-center border-b-1 border-gray-200">
          {/* filter */}
          <div className="">
            {/* <button className=' border-gray-300 py-1 px-6 border-1 bg-white text-gray-400 text-start font-light'>Filters</button> */}
            <CuisineFilter selectedFilters={selectedFilters}  setSelectedFilters={setSelectedFilters}  onAppliedFilters={()=>setAppliedFilters([...selectedFilters])}/>
          </div>
          {/* sort */}
          <div className="flex items-center gap-1">
            <p className='font-light'>Sort By:</p>
            <button className=' border-gray-300 py-1 px-6 border-1 bg-white text-gray-400 text-start font-light'>Relevance</button>

          </div>
        </div>
      </section>
      <InfiniteScrollingComponent selectedFilters={appliedFilters}/>
      
    </section>
  )
}

export default AllRestaurant
