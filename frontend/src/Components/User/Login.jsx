import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ProductCard 
        title="Premium Wireless Headphones" 
        price="$299.99" 
        image="/placeholder.svg?height=300&width=300" 
      />
    </div>
  );
}

function ProductCard({ title, price, image }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Card Header with Image */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-20">
          NEW
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 bg-gradient-to-r from-blue-900 to-black text-white">
        <h3 className="text-xl font-bold mb-2 truncate">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-300">{price}</span>

          {/* Button with hover effect */}
          <div className="group relative">
            <button className="relative z-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 overflow-hidden">
              <span className="relative z-10">View Details</span>
              <span className="absolute inset-0 bg-blue-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
}