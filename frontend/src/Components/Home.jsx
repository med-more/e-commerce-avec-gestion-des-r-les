// HomePage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // Importing the Link component from react-scroll

const HomePage = ({ toggleLogin, toggleRegister }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
    setShowRegister(false);
  };

  const toggleRegisterForm = () => {
    setShowRegister(!showRegister);
    setShowLogin(false);
  };

  // Product Card Component
  const ProductCard = ({ title, price, image }) => {
    return (
      <div className="w-full max-w-sm bg-gradient-to-br from-[#091a2f] to-[#0a1e3f] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        {/* Card Header with Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img src={image} alt={title} className="w-full h-64 object-cover" />
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-20">
            NEW
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 bg-gradient-to-r from-[#0a1e3f] to-[#091a2f] text-white">
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
  };

  return (
    <div className="bg-gradient-to-br from-[#0a1e3f] via-[#091a2f] to-[#0a1e3f] min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center text-white min-h-screen bg-gradient-to-br from-[#0a1e3f] via-[#091a2f] to-[#0a1e3f] px-6 py-16">
        <motion.h2
          className="text-6xl font-extrabold leading-tight mb-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-cyan-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Abibas Store
        </motion.h2>
        
        <motion.p
          className="text-xl mb-10 transition-all duration-300 ease-in-out hover:text-cyan-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover the best products curated just for you. Shop now and enjoy exclusive deals.
        </motion.p>
        
        {/* Shop Now Button with smooth scroll */}
        <Link
          to="product-section" // Link to the product section
          smooth={true} // Enables smooth scroll
          duration={500} // Duration of the scroll animation
          className="bg-[#1a2e4f] text-white py-3 px-8 rounded-lg text-xl font-semibold shadow-lg transform transition-all duration-300 hover:bg-[#2b3f64] hover:scale-110"
        >
          Shop Now
        </Link>
      </section>

      {/* Product Cards Section */}
      <section id="product-section" className="px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Featured Products</h2>
        <div className="flex justify-center gap-6 items-center">
          <ProductCard 
            title="Abibas Classic Hoodie" 
            price="$79.99" 
            image="https://via.placeholder.com/300x300?text=Abibas+Classic+Hoodie" 
          />
          <ProductCard 
            title="Abibas Sports Joggers" 
            price="$59.99" 
            image="https://via.placeholder.com/300x300?text=Abibas+Sports+Joggers" 
          />
          <ProductCard 
            title="Abibas Running Shoes" 
            price="$129.99" 
            image="https://via.placeholder.com/300x300?text=Abibas+Running+Shoes" 
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
