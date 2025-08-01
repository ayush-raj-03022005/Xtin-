import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Brand */}
        <div className="text-2xl font-bold">
          Xtin <span className="text-green-500">Capital</span>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-wrap gap-6 text-sm text-gray-300">
          <li><a href="#" className="hover:text-white transition">Home</a></li>
          <li><a href="#" className="hover:text-white transition">About</a></li>
          <li><a href="#" className="hover:text-white transition">Tools</a></li>
          <li><a href="#" className="hover:text-white transition">Contact</a></li>
        </ul>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Xtin Capital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
