import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-12 lg:px-24 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          Xtin <span className="text-green-600">Capital</span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-green-600 transition">Home</a></li>
          <li><a href="#" className="hover:text-green-600 transition">Tools</a></li>
          <li><a href="#" className="hover:text-green-600 transition">About</a></li>
          <li><a href="#" className="hover:text-green-600 transition">Contact</a></li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
            Start Free Trial
          </button>
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <button className="text-2xl">☰</button> {/* You can hook this up to a mobile drawer */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
