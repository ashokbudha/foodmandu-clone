import React, { useState } from "react";

const CuisineFilter = ({selectedFilters,setSelectedFilters, onAppliedFilters}) => {
  const [showFilter, setShowFilter] = useState(false);

  const cuisines = [
    "Indian",
    "Chinese",
    "Italian",
    "Thai",
    "Mo:Mo",
    "Nepali",
    "Continental",
    "Bakery",
    "Asian",
    "Pizza",
    "Japanese",
    "Multi Cuisine",
    "Vietnamese",
    "Biryani",
    "Burger",
    "Cake",
    "Indian Sweets",
    "Vegetarian",
    "Vegan",
    "Organic",
    "Halal",
    "Liquor",
    "Fast Food",
    "Mexican",
    "Middle Eastern",
    "Newari",
    "American",
    "Korean",
    "Tibetan",
    "Russian",
    "Beverage",
    "Milkshakes",
    "Ice Cream",
    "Yomari",
    "Local Snacks",
    "Healthy",
    "Snacks",
    "Turkish Food",
    "Thakali",
    "Oriental",
    "European",
    "Groceries",
    "Breakfast",
    "Samosa",
    "Sekuwa",
    "Waffles",
    "Fried Chicken",
    "Roll",
    "Sherpa",
    "Singaporean",
    "Seafood",
    "French",
    "English",
    "Veg & Vegan",
    "Butter Naan",
    "Jalebi",
    "Rasbhari",
    "Rasmalai",
    "Lalmohan",
    "Pan Asian",
    "Mithai",
  ];

  const toggleCuisine = (cuisine)=>{
    setSelectedFilters((pre)=> pre.includes(cuisine) ? pre.filter(c=>c!=cuisine) : [...pre, cuisine]);
    console.log(selectedFilters);
  }

  return (
    <div>
      <button
        className="border-gray-300 py-1 px-6 border-1 bg-white text-gray-400 text-start font-light "
        onClick={() => setShowFilter(true)}
      >
        Filter
      </button>

    
 



      {showFilter && (
        <div className="border-1 border-gray-300 absolute bg-[#fdfcfc] flex flex-col items-end">
          <div className="border-b-1 border-gray-300 mx-3 pb-8">
            <h3 className=" py-3 px-2 uppercase text-sm font-semibold text-secondary">
              Cuisines
            </h3>
            <div className="grid grid-cols-3 px-4 border-b-1 border-gray-300 h-55 w-110 overflow-auto">
              {cuisines.map((cuisine) => (
                <label
                  key={cuisine}
                  className="py-2 px-4 flex gap-1 items-start text-gray-400 font-light "
                >
                  <input type="checkbox" name="checkbox" className="mt-1" checked={selectedFilters.includes(cuisine)} onChange={()=>toggleCuisine(cuisine)}/>
                  {cuisine}
                </label>
              ))}
            </div>
          </div>
          <button
            className="primary-btn mr-18 my-6 text-black font-light py-1 "
            onClick={() =>{ 
              setShowFilter(false);
              onAppliedFilters();
              console.log("selected filters after done")
              console.log(selectedFilters);   
             } }
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default CuisineFilter;
