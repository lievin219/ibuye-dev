import React from 'react';
import servicess from '/brian.jpg';

const TrustedPartner = () => {
  return (
    <div className="bg-white py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-start md:items-center gap-12">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={servicess}
            alt="Real Estate Building"
            className="rounded-xl shadow-2xl w-full object-cover h-[400px] md:h-[500px] transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight mb-4">
            Your Trusted <br /> Real Estate Partner
          </h2>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Your trusted real estate partners in Rwanda.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            We provide residential and commercial real estate services, including transactions, consulting, and property management across the country. With deep local knowledge and a global perspective, we offer expert guidance tailored to both local and international trends.
          </p>

          <div className="border-t border-gray-300 my-8" />

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h3>

          <div className="space-y-4 text-gray-700 text-base leading-relaxed">
            <p>
              Rwanda is a growing hub for real estate. Whether you're looking for an investment property, vacation home, commercial building, or land – self-built or existing, in Kigali or beyond – we are here to help.
            </p>
            <p>
              Ibuye, meaning “stone,” was born out of a need to guide those unsure of where to start and who to trust. Many have shared that this uncertainty holds them back from making investment decisions.
            </p>
            <p>
              Over the years, we have helped individuals and businesses achieve their real estate goals through consulting, development, and renovation for both residential and commercial projects.
            </p>
            <p>
              We believe in building long-term relationships with our clients, based on trust, transparency, and exceptional service. Let us be your partner in finding the perfect property.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartner;
