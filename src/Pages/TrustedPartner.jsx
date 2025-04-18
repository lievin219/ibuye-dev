import React from 'react';
import servicess from '/brian.jpg'

const TrustedPartner = () => {
  return (
    <div className="bg-white py-10 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-start md:items-center justify-between">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={servicess} // Replace with your actual image URL
            alt="Real Estate Building"
            className="rounded-md shadow-lg w-full h-2/4 object-cover -mt-40"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-1/2 md:pl-10 lg:pl-16">
          <h2 className="text-2xl font-bold font-semibold text-gray-800 mb-4">
            YOUR TRUSTED
            <br />
            REAL ESTATE PARTNER
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Your trusted real estate partners in Rwanda.
          </p>
          <p className="text-gray-700 mb-6 text-sm">
            We provide residential and commercial real estate services, including transactions, consulting, and property management across the country. With deep local knowledge and a global perspective, we offer expert guidance tailored to both local and international trends.
          </p>

          <div className="border-t border-gray-300 my-8"></div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">OUR STORY</h3>
          <p className="text-gray-700 mb-4 text-sm">
          Rwanda is a growing hub for real estate. Whether you're looking for an investment property, vacation home, commercial building, or land – self-built or existing, in Kigali or beyond – we are here to help.
          </p>
          <p className="text-gray-700 mb-4 text-sm">
          Ibuye, meaning ‘’stone’’,  was born out of a need to guide those unsure of where to start and who to trust. Many have shared that this uncertainty holds them back from making investment decisions.
          </p>
          <p className="text-gray-700 mb-4 text-sm">
          Over the years, we have helped individuals and businesses achieve their real estate goals through consulting, development, and renovation for both residential and commercial projects. We know how important it is to have a reliable partner, and we are here to walk with you every step of the way.
          </p>
          <p className="text-gray-700 text-sm">
            We believe in building long-term relationships with our clients, based on trust, transparency, and exceptional service. Let us be your partner in finding the perfect property.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartner;
