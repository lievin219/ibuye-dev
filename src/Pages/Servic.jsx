import React from 'react';
import brian from '/brian.jpg';

const OverlayCard = ({ position = 'right' }) => {
  return (
    <div className="relative">
      {/* Image */}
      <img
        src={brian}
        alt="Property"
        className="w-full h-auto rounded-xl object-cover shadow-xl"
      />

      {/* Floating box on large screens */}
      <div
        className={`bg-white bg-opacity-95 p-6 md:p-8 rounded-xl shadow-lg max-w-md text-sm backdrop-blur-sm
        absolute ${position === 'right' ? 'right-6' : 'left-6'} bottom-6 hidden sm:block`}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-3">RESIDENTIAL FORT’D</h3>
        <p className="text-gray-600 mb-3 text-sm">
          This visualization project showcases a modern building in the historic center of Omsk, Russia. Originally built as a 2018 FIFA World Cup hostel, it remains a landmark.
        </p>
        <div className="text-gray-700 text-sm mb-1"><strong>LOCATION:</strong> KINYINYA KIGALI</div>
        <div className="text-gray-700 text-sm mb-1"><strong>PROJECT TYPE:</strong> Residential</div>
        <div className="text-gray-700 text-sm mb-3">
          <strong>KEY FEATURES:</strong>
          <ul className="list-disc list-inside text-xs mt-1">
            <li>New Landmark</li>
            <li>Spacious Interior</li>
            <li>Artificial Marble Suits</li>
          </ul>
        </div>
        <button className="mt-2 text-sm text-blue-600 hover:underline font-medium">DOWNLOAD BROCHURE</button>
      </div>

      {/* Mobile view */}
      <div className="block sm:hidden mt-4 bg-white p-5 rounded-xl shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-2">RESIDENTIAL FORT’D</h3>
        <p className="text-gray-600 text-sm mb-2">
          This visualization project showcases a modern building in the historic center of Omsk, Russia. Originally built as a 2018 FIFA World Cup hostel, it remains a landmark.
        </p>
        <div className="text-gray-700 mb-1 text-sm"><strong>LOCATION:</strong> KINYINYA KIGALI</div>
        <div className="text-gray-700 mb-1 text-sm"><strong>PROJECT TYPE:</strong> Residential</div>
        <div className="text-gray-700 text-sm mb-3">
          <strong>KEY FEATURES:</strong>
          <ul className="list-disc list-inside text-xs mt-1">
            <li>New Landmark</li>
            <li>Spacious Interior</li>
            <li>Artificial Marble Suits</li>
          </ul>
        </div>
        <button className="mt-2 text-sm text-blue-600 hover:underline font-medium">DOWNLOAD BROCHURE</button>
      </div>
    </div>
  );
};

const Servic = () => {
  return (
    <div className="bg-gray-50 px-4 sm:px-6 lg:px-20 py-20 pt-40">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">OUR PORTFOLIO</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Discover projects designed with attention to detail and modern architecture. We help clients find dream homes or investment opportunities with full transparency and passion.
        </p>
      </div>

      {/* Portfolio Cards */}
      <div className="max-w-6xl mx-auto space-y-20">
        <OverlayCard position="right" />
        <OverlayCard position="left" />
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="text-blue-600 underline font-medium hover:text-blue-800 transition-all duration-200">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Servic;
