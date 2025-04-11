import React from 'react';
import { Link } from 'react-router-dom';

const Navabar = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10 bg-white">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-6 md:px-20 py-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-blue-800">Ibuye</h1>
        </div>

        {/* Navigation Menu */}
        <ul className="hidden md:flex gap-[50px] list-none text-[15px] text-violet-600 font-[500] font-sans">
          <li className="flex flex-col items-center justify-center gap-[3px] cursor-pointer">
            <Link to="/home" className="text-black hover:text-blue-700">Home</Link>
            <hr className="border-none w-[80%] h-[3px] bg-blue-600 rounded hidden" />
          </li>
          <li className="flex flex-col items-center justify-center gap-[3px] cursor-pointer">
            <Link to="/about" className="text-black hover:text-blue-700">About us</Link>
            <hr className="border-none w-[80%] h-[3px] bg-blue-600 rounded hidden" />
          </li>
          <li className="flex flex-col items-center justify-center gap-[3px] cursor-pointer">
            <Link to="/whyrwanda" className="text-black hover:text-blue-700">Whyrwanda</Link>
            <hr className="border-none w-[80%] h-[3px] bg-blue-600 rounded hidden" />
          </li>
          <li className="flex flex-col items-center justify-center gap-[3px] cursor-pointer">
            <Link to="/service" className="text-black hover:text-blue-700">Services</Link>
            <hr className="border-none w-[80%] h-[3px] bg-blue-600 rounded hidden" />
          </li>
          <li className="flex flex-col items-center justify-center gap-[3px] cursor-pointer">
            <Link to="/portofolio" className="text-black hover:text-blue-700">Our portfolio</Link>
            <hr className="border-none w-[80%] h-[3px] bg-blue-600 rounded hidden" />
          </li>
        </ul>

        {/* Plan a meeting Button */}
        <button className="hidden md:block w-[157px] h-[58px] border border-blue-700 text-blue-700 font-semibold rounded-full bg-white hover:bg-blue-700 hover:text-white transition">
          <Link to="/meeting">Plan a meeting</Link>
        </button>
      </div>
    </div>
  );
};

export default Navabar;
