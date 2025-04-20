import React from 'react'
import servicess from '/brian.jpg'

const Porto = () => {
  return (
    <div className="bg-black w-full text-white py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
      {/* Left Section */}
      <div className='flex flex-col justify-center'>
        <img
          src={servicess} 
          alt="Modern building"
          className="w-full h-auto object-cover rounded-lg shadow-lg mb-6 hover:scale-105 transition-transform duration-500"
        />
        <h2 className="text-3xl font-bold mb-4 text-white">Our Real Estate Services</h2>
        <ul className="space-y-3 text-gray-300 text-base">
          {[
            'Residential Property Management',
            'Legal Tax Services',
            'Due Diligence',
            'Residential Property Development'
          ].map((item, idx) => (
            <li key={idx} className="hover:text-white transition-all duration-300 cursor-pointer">
              ➤ {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="relative">
        {/* Decorative Background Text */}
        <h2 className="absolute -top-10 left-4 text-5xl font-extrabold text-white opacity-10 tracking-widest z-0">
          SERVICES
        </h2>

        {/* Main Image */}
        <img
          src={servicess}
          alt="Real estate"
          className="w-full rounded-lg shadow-lg mb-4 relative z-10"
        />

        {/* Description Box */}
        <div className="bg-gray-100 text-black p-6 rounded-lg text-sm leading-relaxed shadow-md relative z-10">
          Explore our extensive portfolio of carefully curated properties. We provide detailed listings with high-quality photos and comprehensive descriptions to help you find the perfect match for your needs.
        </div>
      </div>
    </div>
  )
}

export default Porto
