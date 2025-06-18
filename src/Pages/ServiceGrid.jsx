import React, { useState } from 'react';
import krake from '/krake.jpg'

const services = [
  {
    title: 'Web Development',
    color: 'bg-green-100',
    text: 'text-green-700',
    description: 'Building responsive and modern websites',
    image: krake,
  },
  {
    title: 'UI/UX Design',
    color: 'bg-blue-100',
    text: 'text-blue-700',
    description: 'Designing user-friendly interfaces',
    image: krake,
  },
  {
    title: 'Digital Marketing',
    color: 'bg-yellow-100',
    text: 'text-yellow-700',
    description: 'Promoting brands through digital channels',
    image: '/marketing.png',
  },
  {
    title: 'Mobile App Development',
    color: 'bg-purple-100',
    text: 'text-purple-700',
    description: 'Creating Android and iOS applications',
    image: krake,
  },
  {
    title: 'E-commerce Solutions',
    color: 'bg-red-100',
    text: 'text-red-700',
    description: 'Online store setup and management',
    image: krake,
  },
  {
    title: 'SEO Optimization',
    color: 'bg-teal-100',
    text: 'text-teal-700',
    description: 'Improving search engine rankings',
    image:krake,
  },
  {
    title: 'Content Creation',
    color: 'bg-orange-100',
    text: 'text-orange-700',
    description: 'Engaging copy and visual media',
    image: krake,
  },
  {
    title: 'Branding',
    color: 'bg-indigo-100',
    text: 'text-indigo-700',
    description: 'Identity design for businesses',
    image: krake,
  },
  {
    title: 'Consulting',
    color: 'bg-lime-100',
    text: 'text-lime-700',
    description: 'Professional guidance and strategy',
    image: krake,
  },
];

const ServiceGrid = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setStep(2);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {step === 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleServiceClick(service)}
              className={`p-6 rounded-xl shadow-md hover:scale-105 transition text-left ${service.color} ${service.text}`}
            >
              <img src={service.image} alt={service.title} className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
            </button>
          ))}
        </div>
      )}

      {step === 2 && selectedService && (
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">{selectedService.title} Overview</h2>
          <p className="mb-6 text-gray-600">{selectedService.description}</p>
          <img src={selectedService.image} alt={selectedService.title} className="mx-auto h-40 mb-6" />
          <button
            onClick={() => setStep(3)}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Start Simulation
          </button>
        </div>
      )}

      {step === 3 && selectedService && (
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">{selectedService.title} Simulation</h2>
          <p className="text-gray-600 mb-4">
            (Simulation content goes here...)
          </p>
          <button
            onClick={() => setStep(1)}
            className="px-6 py-2 mt-4 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Back to Services
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceGrid;
