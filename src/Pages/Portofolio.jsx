import React from 'react';
import brian from '/brian.jpg';

const OverlayCard = ({ position = 'right' }) => {
  return (
    <div className="relative">
      {/* Image */}
      <img
        src={brian}
        alt="Property"
        className="w-full h-auto rounded-md object-cover shadow-lg"
      />

      {/* Floating box on large screens, stacked on small screens */}
      <div
        className={`bg-white bg-opacity-95 p-4 sm:p-5 md:p-6 rounded-md shadow-md w-full max-w-full sm:max-w-sm md:max-w-md text-sm backdrop-blur-sm
        absolute ${position === 'right' ? 'right-4' : 'left-4'} bottom-4
        hidden sm:block`}
      >
        <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">RESIDENTIAL FORT’D</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-2">
          This Visualization Project Is About The Building In The Historical Center Of Omsk City, Russia.
          Initially, It Was Built As A Hostel For The 2018 FIFA World Cup, But The Project Was Not Completed As Supposed.
        </p>
        <div className="text-gray-700 mb-1">
          <strong>LOCATION:</strong> KINYINYA KIGALI
        </div>
        <div className="text-gray-700 mb-1">
          <strong>PROJECT TYPE:</strong> Residential
        </div>
        <div className="text-gray-700 mb-2">
          <strong>KEY FEATURES:</strong>
          <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm">
            <li>New Landmark</li>
            <li>Spacious Interior</li>
            <li>Artificial Marble Suits</li>
          </ul>
        </div>
        <button className="mt-2 text-black underline hover:text-black">DOWNLOAD BROCHURE</button>
      </div>

      {/* For small screens — show below the image */}
      <div className="block sm:hidden mt-4 bg-white p-4 rounded-md shadow-md">
        <h3 className="text-lg font-semibold text-black mb-2">RESIDENTIAL FORT’D</h3>
        <p className="text-gray-600 text-sm mb-2">
          This Visualization Project Is About The Building In The Historical Center Of Omsk City, Russia.
          Initially, It Was Built As A Hostel For The 2018 FIFA World Cup, But The Project Was Not Completed As Supposed.
        </p>
        <div className="text-gray-700 mb-1 text-sm">
          <strong>LOCATION:</strong> KINYINYA KIGALI
        </div>
        <div className="text-gray-700 mb-1 text-sm">
          <strong>PROJECT TYPE:</strong> Residential
        </div>
        <div className="text-gray-700 mb-2 text-sm">
          <strong>KEY FEATURES:</strong>
          <ul className="list-disc list-inside text-gray-600 text-xs">
            <li>New Landmark</li>
            <li>Spacious Interior</li>
            <li>Artificial Marble Suits</li>
          </ul>
        </div>
        <button className="mt-2 text-black underline hover:text-black">DOWNLOAD BROCHURE</button>
      </div>
    </div>
  );
};

const Portofolio = () => {
  return (
    <div className="bg-white px-4 py-16 space-y-12 py-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-3xl font-bold text-black-800 mb-2 text-left">OUR PORTOFOLIO</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-4xl">
          These project details can be customized and expanded upon for each property listing on your real estate website.
          Providing comprehensive and accurate information helps potential buyers make informed decisions about the properties you have available.
        </p>
      </div>

      {/* Two components: one with right overlay, one with left overlay */}
      <div className="max-w-5xl mx-auto space-y-12">
        <OverlayCard position="right" />
        <OverlayCard position="left" />
      </div>
    </div>
  );
};

export default Portofolio;
