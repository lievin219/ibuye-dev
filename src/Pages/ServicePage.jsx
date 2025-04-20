import React from 'react';
import services from '/brian.jpg';
import servicess from '/brian.jpg';
import { FaBuilding, FaTools, FaCogs, FaBalanceScale, FaSearch } from 'react-icons/fa';

const serviceData = [
  {
    title: '1. RESIDENTIAL/COMMERCIAL PROPERTY CONSULTING',
    description:
      'Explore our extensive portfolio of carefully curated properties. We provide detailed listings with high-quality photos and comprehensive descriptions to help you find the perfect match for your needs.',
    icon: <FaBuilding size={24} />,
  },
  {
    title: '2. RESIDENTIAL/COMMERCIAL PROPERTY DEVELOPMENT',
    description:
      "Our experienced team guides you through the home-buying process. From finding the right property to negotiating and paperwork, we’ve got you covered.",
    icon: <FaTools size={24} />,
  },
  {
    title: '3. RESIDENTIAL/COMMERCIAL PROPERTY MANAGEMENT',
    description:
      "When it's time to sell your property, trust us to showcase it effectively with modern marketing and targeted advertising.",
    icon: <FaCogs size={24} />,
  },
  {
    title: '4. LEGAL AND TAX SERVICES',
    description:
      'We provide tailored legal and tax support for real estate investments. Trust our experts to guide your financial decisions.',
    icon: <FaBalanceScale size={24} />,
  },
  {
    title: '5. DUE DILIGENCE AND FEASIBILITY STUDIES',
    description:
      'We provide in-depth studies and research to ensure your property investments are backed with data and insight.',
    icon: <FaSearch size={24} />,
  },
];

const ServicesPage = () => {
  return (
    <div className="py-20 bg-gray-100 pt-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
          <img
            src={servicess}
            alt=""
            className="w-72 h-auto object-cover rounded-xl shadow-lg"
          />
          <img
            src={services}
            alt=""
            className="w-72 h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 uppercase tracking-wide">
            Our Real Estate Services
          </h1>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-2xl bg-white overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-100 via-transparent to-blue-200 rounded-2xl z-0 transition-all duration-500"></div>

              {/* Icon and Title */}
              <div className="relative z-10 flex items-center gap-4 mb-4 transition-transform duration-300 transform group-hover:translate-x-1">
                <div className="text-blue-500">{service.icon}</div>
                <h2 className="text-lg font-bold text-gray-800">{service.title}</h2>
              </div>

              {/* Description */}
              <p className="relative z-10 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {service.description}
              </p>

              {/* Border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

