import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '/houses.jpg'; // replace this path with your image path

const Navabar = () => {
  return (
    <div
      className="w-full fixed top-0 left-0 z-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 pt-4 space-y-4 lg:space-y-0">

        {/* Logo */}
        <div className="text-white font-bold text-2xl mr-4 pt-2">
          Ibuye
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 sm:grid-rows-2 w-full sm:w-[700px] text-sm text-white gap-0">
          {/* Top row */}
          <div className="border-b border-r border-white bg-white text-black p-3 text-center">
            <Link to="/home">Home</Link>
          </div>
          <div className="border border-white border-t-0 p-3 text-center">
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div className="border-b border-l border-white border-t-0 p-3 text-center">
            <Link to="/whyrwanda">Why Rwanda</Link>
          </div>

          {/* Bottom row */}
          <div className="border-b border-r border-white border-t-0 p-3 text-center">
            <Link to="/about">About Us</Link>
          </div>
          <div className="border border-white border-t-0 p-3 text-center">
            <Link to="/service">Services</Link>
          </div>
          <div className="border-b border-l border-white border-t-0 p-3 text-center">
            {/* Empty or future nav */}
          </div>
        </div>

        {/* Plan a Meeting */}
        <div className="bg-white text-black text-sm px-3 py-2 rounded-sm whitespace-nowrap">
          <Link to="/meeting">Plan a meeting</Link>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
