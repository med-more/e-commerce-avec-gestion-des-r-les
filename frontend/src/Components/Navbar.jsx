// NavBar.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // Importing the Link component from react-scroll

const NavBar = ({ toggleLogin, toggleRegister }) => {
  return (
    <nav className="bg-[#0a1e3f] p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="text-3xl text-white font-bold transition-all duration-300 ease-in-out"
          whileHover={{
            color: "#5eead4", // Light blue color on hover
          }}
        >
          Abibas Store
        </motion.h1>
        <div className="space-x-4">
          {/* Home Button */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-white py-2 px-4 hover:text-blue-300 transition duration-300"
          >
            Home
          </Link>

          {/* Login Button */}
          <button
            onClick={toggleLogin}
            className="text-white py-2 px-4 hover:text-blue-300 transition duration-300"
          >
            Login
          </button>

          {/* Register Button */}
          <button
            onClick={toggleRegister}
            className="text-white py-2 px-4 hover:text-blue-300 transition duration-300"
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
