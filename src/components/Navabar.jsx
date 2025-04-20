import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // For icons
import bgImage from '/houses.jpg'; // replace this path with your image path

const Navabar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-10 bg-cover bg-center ">
      <div className="relative max-w-[1500px] mx-auto">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 pt-4">
          <div className="flex justify-between items-center lg:items-start">
            {/* Logo */}
            <div className="text-white font-bold text-2xl pt-2">Ibuye</div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden text-white">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
            {/* Navigation Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 ml-52  sm:grid-rows-2 w-full sm:w-[700px] text-sm text-white gap-0 ">
              <div className="border-b border-r border-white bg-white text-black p-3 text-center">
                <Link to="/home">Home</Link>
              </div>
              <div className="border border-white border-t-0 p-3 text-center">
                <Link to="/portfolio">Portfolio</Link>
              </div>
              <div className="border-b border-l border-white border-t-0 p-3 text-center">
                <Link to="/whyrwanda">Why Rwanda</Link>
              </div>
              <div className="border-b border-r border-white border-t-0 p-3 text-center">
                <Link to="/about">About Us</Link>
              </div>
              <div className="border border-white border-t-0 p-3 text-center">
                <Link to="/service">Services</Link>
              </div>
              <div className="border-b border-l border-white border-t-0 p-3 text-center"></div>
            </div>

            {/* Plan a Meeting */}
            <div className="bg-white text-black text-sm px-3 py-11 -mt-8 rounded-sm whitespace-nowrap">
              <Link to="/meeting">Plan a meeting</Link>
            </div>
          </div>

          {/* Mobile Nav Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 space-y-2 text-sm">
              <Link
                to="/home"
                onClick={handleLinkClick}
                className="block bg-white text-black p-3 rounded text-center"
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                onClick={handleLinkClick}
                className="block bg-white text-black p-3 rounded text-center"
              >
                Portfolio
              </Link>
              <Link
                to="/whyrwanda"
                onClick={handleLinkClick}
                className="block bg-white text-black p-3 rounded text-center"
              >
                Why Rwanda
              </Link>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="block bg-white text-black p-3 rounded text-center"
              >
                About Us
              </Link>
              <Link
                to="/service"
                onClick={handleLinkClick}
                className="block bg-white text-black p-3 rounded text-center"
              >
                Services
              </Link>
              <Link
                to="/meeting"
                onClick={handleLinkClick}
                className="block bg-white text-black p-3 rounded text-center"
              >
                Plan a meeting
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navabar;
