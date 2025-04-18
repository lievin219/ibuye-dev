import React from "react";
import brian from '/brian.jpg'



const ResidentialFortD = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <div
        className="relative text-white overflow-hidden"
        style={{
        //   backgroundImage:"url('/brian.jpg')",
          backgroundSize: "cover",
        //   backgroundPosition: "center",
          height: "600px",
          width: "100%"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-20 flex justify-between items-end h-full">
          <div>
            <p className="text-sm text-gray-300">Projects</p>
            <h2 className="text-4xl font-bold">RESIDENTIAL FORT'D</h2>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-300">LOCATION:</p>
            <p className="text-base font-medium">Kimiryra, Kigali</p>
            <p className="text-xs text-gray-300 mt-2">PRICE:</p>
            <p className="text-base font-medium">Starting From $2,999.99</p>
          </div>
        </div>
      </div>

      {/* Content Below Image */}
      <div className="max-w-screen-xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2">
        {/* Left Side */}
        <div className="space-y-6">
          <p className="text-gray-600 text-sm">
            This Visualization Project Is About The Building In The Historical Center
            Of Omsk City, Russia, Initially. It Was Built As A Hotel For The 2018 FIFA
            World Cup, But The Project Was Not Completed As Supposed.
          </p>

          <div>
            <h3 className="text-md font-semibold mb-4">PROJECT AMENITIES</h3>
            <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-700">
              <div>
                <div className="w-12 h-12 mx-auto rounded-full border flex items-center justify-center">🏋️‍♂️</div>
                <p>Gymnasium</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto rounded-full border flex items-center justify-center">🛋️</div>
                <p>Living Room</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto rounded-full border flex items-center justify-center">🍽️</div>
                <p>Dining Area</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto rounded-full border flex items-center justify-center">🏊‍♂️</div>
                <p>Swimming Pool</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto rounded-full border flex items-center justify-center">🔋</div>
                <p>Power Backup</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto rounded-full border flex items-center justify-center">📍</div>
                <p>Ideal Location</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex items-center justify-center">
          <img
            src={brian} // Replace with actual image
            alt="Room View"
            className="rounded-md shadow-md w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ResidentialFortD;
