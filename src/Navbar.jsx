import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md fixed top-0 left-0 z-50 ">
      <div className="flex items-center justify-between px-6 py-4 font-poppins text-gray-700">
        <div className="text-3xl font-bold text-gray-600 mx-3 md:mx-20">eNno</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <nav className="flex gap-6 text-sm">
            <a href="#home" className="text-green-500">Home</a>
            <a href="#about" className="hover:text-green-500">About</a>
            <a href="#service" className="hover:text-green-500">Service</a>
            <a href="#portfolio" className="hover:text-green-500">Portfolio</a>
            <a href="#team" className="hover:text-green-500">Team</a>
            <a href="#contact" className="hover:text-green-500">Contact</a>
          </nav>
          <a href="#get" className="bg-green-600 px-6 py-2 rounded-full text-white hover:bg-green-500">Get Started</a>
        </div>

      
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center bg-white gap-5 py-5 md:hidden shadow-lg">
          <a href="#home" className="text-green-500">Home</a>
          <a href="#about" className="hover:text-green-500">About</a>
          <a href="#service" className="hover:text-green-500">Service</a>
          <a href="#portfolio" className="hover:text-green-500">Portfolio</a>
          <a href="#team" className="hover:text-green-500">Team</a>
          <a href="#contact" className="hover:text-green-500">Contact</a>
          <a href="#get" className="bg-green-600 px-6 py-2 rounded-full text-white hover:bg-green-500">Get Started</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
