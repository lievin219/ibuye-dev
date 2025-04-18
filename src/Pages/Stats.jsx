import React from 'react'
import servicess from '/brian.jpg'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Stats = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">

        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Stats 2x2 Grid */}
          <div className="grid grid-cols-2 border rounded-md shadow-md overflow-hidden">
            {[
              { number: '2100+', label: 'Total Projects' },
              { number: '21+', label: 'Years of Experience' },
              { number: '2000+', label: 'Happy Customers' },
              { number: '50+', label: 'Awards' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-6 
                  ${index % 2 === 0 ? 'border-r' : ''} 
                  ${index < 2 ? 'border-b' : ''} 
                  border-gray-300`}
              >
                <h3 className="text-3xl font-bold text-blue-900">{stat.number}</h3>
                <p className="text-sm text-gray-600 text-center">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed mt-4">
            We work together with our clients to design and construct homes and surroundings that match their values and way of life.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-6">
          {/* Two images side by side */}
          <div className="flex gap-4 w-full">
            <img src={servicess} alt="Project 1" className="w-1/2 rounded-md shadow-md object-cover" />
            <img src={servicess} alt="Project 2" className="w-1/2 rounded-md shadow-md object-cover" />
          </div>

          {/* View Project Button */}
          <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
          <Link to='/portfolio'>  View Project </Link> <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}

export default Stats
