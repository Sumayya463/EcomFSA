import React from 'react';
const categories = [
    "All Products",
    "Phones",
    "Earphones",
    "Tvs",
    "laptops",
    "monitors",
    "accessories",
  ];


const Hero = () => {
  return (
    <section className="w-full ">
    <div className="max-w-7xl px-20 py-10 flex ">
      <div className="flex space-x-4 overflow-x-auto no-scrollbar">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-5 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-3xl hover:bg-gray-300 hover:text-black transition ${
                  index === 0
                    ? "bg-indigo-950 text-white border-blue-700 hover:bg-blue-700"  : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300 hover:text-black"
                }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  </section>
);
}
  


export default Hero;