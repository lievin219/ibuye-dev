import React from 'react';
import services from '../assets/services.jpg'
import servicess from '../assets/servicess.jpg'

const ServicesPage = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        {/* Navbar (You can reuse the Navbar component here) */}
     

        {/* Hero Section */}
   <div className='flex flex-row gap-20  justify-center items-center p-4'>
     
            <img src={servicess} alt="" className='w-65 h-auto object-contain rounded shadow-md mt-10'/>
            <img src={services} alt="" className='w-65 h-auto object-contain rounded shadow-md'/> 
            </div>
        <div className="text-center mb-16">

            
          <h1 className="text-lg   mb-4 font-bold text-left">OUR REAL ESTATE SERVICE</h1>
          <p className="">
            Explore Our Extensive Portfolio Of Carefully Curated Properties, We Provide. [cite: 40, 41]
            Detailed Listings With High Quality Photos And Comprehensive Descriptioris
            To Help You Find The Perfect Match For Your Needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. RESIDENTIAL/COMMERCIAL PROPERTY CONSULTING
            </h2>
            <p className="text-gray-700">
              Our experienced team of real estate experts is here to guide you through the home-buying process. [cite: 42, 43]
              From finding the right property to negotiating the best
              deal and navigating the paperwork, we're with you every step of the way.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. RESIDENTIAL/COMMERCIAL PROPERTY DEVELOPMENT
            </h2>
            <p className="text-gray-700">
              Our experienced team of real estate experts is here to guide you through the home-buying process. [cite: 42, 43]
              From finding the right property to negotiating the best
              deal and navigating the paperwork, we're with you every step of the way.
            </p>
          </div>

          {/* Service 3 */}
           <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              3. RESIDENTIAL/COMMERCIAL PROPERTY MANAGEMENT
            </h2>
            <p className="text-gray-700">
              When it's time to sell your property, trust us to showcase it effectively. [cite: 44, 45]
              We utilize modern marketing strategies, professional photography, and targeted
              advertising to ensure your property gets the attention it deserves.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. LEGAL AND TAX SERVICES
            </h2>
            <p className="text-gray-700">
              Explore real estate investment opportunities tailored to your goals. [cite: 46, 47]
              Our experts can help you identify properties with great potential for ROL
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              5. DUE DILIGENCE AND FEASIBILITY STUDIES
            </h2>
            <p className="text-gray-700">
              Explore real estate investment opportunities tailored to your goals. [cite: 47, 48]
              Our experts can help you identify properties with great potential for ROL
            </p>
          </div>
        </div>

        

          
      </div>
    </div>
  );
};

export default ServicesPage;