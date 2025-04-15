import React from 'react'
import servicess from '/brian.jpg'

const Porto = () => {
  return (
    <div className="bg-black text-white py-12 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
    {/* Left Section */}
    <div className='text-left'>
      <img
        src={servicess} 
        alt="Modern building"
        className="w-65 h-auto object-contain rounded shadow-md mt-10 mb-6"
      />
      <h2 className="text-2xl font-bold mb-6">OUR REAL ESTATE SERVICE</h2>
      <ul className="space-y-4 text-gray-400">
        <li className="hover:underline cursor-pointer">
          Residential Property Management →
        </li>
        <li className="hover:underline cursor-pointer">
          Legal Tax Services
        </li>
        <li className="hover:underline cursor-pointer">
          Due Diligence
        </li>
        <li className="hover:underline cursor-pointer">
          Residential Property Development
        </li>
      </ul>
    </div>

    {/* Right Section */}
    <div>
      <div className="relative mb-6">
      <h2 className="absolute -top-14 left-4 text-5xl font-bold text-white opacity-10 tracking-widest">
          SERVICES
        </h2>
        <img
          src={servicess} // Replace with your actual image
          alt="Real estate"
          className="w-full mt-5"
        />
        
      </div>
      <div className="bg-gray-200 text-black p-6 text-sm leading-relaxed">
        Explore our extensive portfolio of carefully curated properties. We provide detailed listings with high-quality photos and comprehensive descriptions to help you find the perfect match for your needs.
      </div>
    </div>
  </div>
  )
}

export default Porto
