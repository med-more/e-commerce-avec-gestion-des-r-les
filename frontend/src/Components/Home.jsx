import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowRegister(false);
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
    setShowLogin(false);
  };

  return (
    <div className="bg-gradient-to-br from-[#0a1e3f] via-[#091a2f] to-[#0a1e3f] min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-[#0a1e3f] p-6 shadow-md fixed w-full z-50 backdrop-blur-lg">
  <div className="container mx-auto flex justify-between items-center">
    <motion.h1
      className="text-3xl text-white font-bold hover:text-blue-300 transition-all duration-300 ease-in-out cursor-pointer"
      whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(255,255,255,0.8)" }}
    >
      404.js E-Shop
    </motion.h1>
    <div className="space-x-6">
      {/* Home Button */}
      <motion.button
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
          backgroundColor: "#1E90FF",  // Blue background color
        }}
        className="text-white py-2 px-6 rounded-md transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
      >
        Home
      </motion.button>
      
      {/* Login Button */}
      <motion.button
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
          backgroundColor: "#1E90FF",  // Blue background color
        }}
        onClick={toggleLogin}
        className="text-white py-2 px-6 rounded-md transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
      >
        Login
      </motion.button>

      {/* Register Button */}
      <motion.button
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
          backgroundColor: "#1E90FF",  // Blue background color
        }}
        onClick={toggleRegister}
        className="text-white py-2 px-6 rounded-md transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
      >
        Register
      </motion.button>
    </div>
  </div>
</nav>



      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center text-white min-h-screen px-6 py-16 overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("/your-background-image.jpg")' }}>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div> {/* Overlay for readability */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <motion.h2
            className="text-7xl font-extrabold leading-tight mb-6 text-shadow-xl"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to 404.js E-Shop
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Discover an exclusive collection of top-rated products, tailor-made to enhance your life. Shop now and unlock incredible deals.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-blue-700 py-3 px-8 rounded-full text-xl font-semibold hover:bg-blue-600 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Shop Now
          </motion.button>
        </div>
      </section>

      {/* Product Cards */}
      <section className="px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Featured Products</h2>
        <div className="flex justify-center gap-6 items-center">
          {[ 
            { title: "Premium Wireless Headphones", price: "$299.99", image: "/placeholder.svg?height=300&width=300" },
            { title: "Gaming Laptop", price: "$1299.99", image: "/placeholder.svg?height=300&width=300" },
            { title: "Smartwatch Series 5", price: "$499.99", image: "/placeholder.svg?height=300&width=300" }
          ].map((product, index) => (
            <div key={index} className="w-full max-w-sm bg-gradient-to-br from-[#091a2f] to-[#0a1e3f] rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="relative">
                <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-t-xl" />
              </div>
              <div className="p-5 bg-gradient-to-r from-blue-900 to-black text-white rounded-b-xl">
                <h3 className="text-xl font-bold mb-2 truncate">{product.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-300">{product.price}</span>
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
                      color: "#32CD32",
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="bg-[#091a2f] text-white py-6 text-center mt-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl hover:text-pink-500 transition duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:text-blue-700 transition duration-300" />
          </a>
        </div>
        <p className="text-lg">&copy; 2025 404.js E-Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
