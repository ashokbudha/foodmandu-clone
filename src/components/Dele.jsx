import React, { useState } from "react";

const cuisines = [
  "Indian", "Chinese", "Italian", "Thai", "Mo:Mo", "Nepali",
  "Continental", "Bakery", "Asian", "Pizza", "Japanese",
  "Multi Cuisine", "Vietnamese", "Biryani", "Burger"
];

export default function CuisineFilterBox() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const toggleCuisine = (cuisine) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisine)
        ? prev.filter((c) => c !== cuisine)
        : [...prev, cuisine]
    );
  };

  const handleDone = () => {
    setShowFilters(false);
    console.log("Selected Cuisines:", selectedCuisines); // you can use the selectedCuisines variable
  };

  return (
    <div className="relative inline-block text-left">
      {/* Filter Button */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="border px-4 py-2 rounded shadow bg-white hover:bg-gray-50 flex items-center gap-2"
      >
        <span className="material-icons">filter_list</span> Filters
      </button>

      {/* Filter Box */}
      {showFilters && (
        <div className="absolute z-10 mt-2 w-72 bg-white border rounded shadow-lg p-4">
          <div className="font-semibold text-sm uppercase text-gray-600 mb-2">Cuisine</div>
          <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
            {cuisines.map((cuisine) => (
              <label key={cuisine} className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-red-700"
                  checked={selectedCuisines.includes(cuisine)}
                  onChange={() => toggleCuisine(cuisine)}
                />
                {cuisine}
              </label>
            ))}
          </div>

          <div className="pt-3 text-right">
            <button
              onClick={handleDone}
              className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded hover:bg-yellow-500"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
