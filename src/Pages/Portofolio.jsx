import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react';

import servicess from '/brian.jpg'

const Portofolio = () => {
  return (
    <section className="bg-white  px-6 ">
    <h2 className="text-2xl font-bold mb-6">OUR PORTOFOLIO</h2>

    <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-xl shadow-md overflow-hidden">
      {/* Left - Image */}
      <div className="w-full md:w-1/2">
        <img
          src={servicess} 
          alt="Residential Fort'd"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right - Text */}
      <div className="w-full md:w-1/2 p-6 space-y-4 relative">
        <h3 className="text-xl font-semibold uppercase">Residential Fort'd</h3>
        <div style={{ backgroundColor: '#004e92' }} className="bg-blue-600 text-white p-4 rounded-md shadow-md">
          <p className="text-sm leading-relaxed">
            This visualization project is about the building in the historical center of Kigali, Russia. 
            Initially, it was built as a hotel for the 2018 FIFA World Cup, but the project was not completed as supposed.
          </p>
          <a href="#" className="text-white underline mt-2 inline-block text-sm">
            More Information
          </a>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2 absolute bottom-4 right-4">
          <button className="p-2 bg-white rounded shadow hover:bg-gray-200">
            <ArrowLeft size={18} />
          </button>
          <button className="p-2 bg-black text-white rounded shadow hover:bg-gray-800">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Portofolio
