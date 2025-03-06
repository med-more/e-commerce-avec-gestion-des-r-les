// Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Importing social icons

const Footer = () => {
  return (
    <footer className="bg-[#0a1e3f] py-6 mt-auto">
      <div className="container mx-auto text-center text-white">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-blue-300 transition duration-300">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="hover:text-blue-300 transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-blue-300 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-blue-300 transition duration-300">
            <FaLinkedinIn size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">© 2025 Abibas Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
