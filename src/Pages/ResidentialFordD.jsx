import React from "react";
import brian from "/houses.jpg";
import room1 from "/brian.jpg"; // Replace with your actual image paths
import room2 from "/brian.jpg";
import room3 from "/brian.jpg";

const ResidentialFortD = () => {
  return (
    <div className="font-[Times_New_Roman]">
      {/* Hero Image Section */}
      <div
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage: `url(${brian})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
        }}
      >
        <div className="absolute inset-0 bg-opacity-40"></div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold">RESIDENTIAL FORT'D</h2>
        </div>

        {/* Floating white box for Location and Price */}
        <div className="absolute right-8 bottom-8 bg-white text-black p-6 rounded-lg shadow-lg w-72 z-20">
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-500">LOCATION:</p>
            <p className="text-sm font-medium">Kinyinya, Kigali</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500">PRICE:</p>
            <p className="text-sm font-medium">Starting From $2,999.99</p>
          </div>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2">
        {/* Left Text Column */}
        <div className="space-y-6">
          <p className="text-gray-600 text-sm leading-relaxed">
            This Visualization Project Is About The Building In The Historical Center
            Of Omsk City, Russia, Initially. It Was Built As A Hotel For The 2018 FIFA
            World Cup, But The Project Was Not Completed As Supposed.
          </p>

          <div>
            <h3 className="text-md font-semibold mb-4">PROJECT AMENITIES</h3>
            <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-700">
              {[
                ["🏋️‍♂️", "Gymnasium"],
                ["🛋️", "Living Room"],
                ["🍽️", "Dining Area"],
                ["🏊‍♂️", "Swimming Pool"],
                ["🔋", "Power Backup"],
                ["📍", "Ideal Location"],
              ].map(([icon, label]) => (
                <div key={label}>
                  <div className="w-12 h-12 mx-auto rounded-full border flex items-center justify-center">{icon}</div>
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center">
          <img
            src={brian}
            alt="Room View"
            className="rounded-md shadow-md w-full max-w-md"
          />
        </div>
      </div>

      {/* Property Highlight Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          {/* Text */}
          <div>
            <h3 className="text-xl font-semibold mb-4">PROPERTY HIGHLIGHT</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              This is your opportunity to experience luxury, comfort, and confidence like never before.
              Seamlessly blending modern aesthetics with practical convenience, this premium residence
              is tailored for those who value quality and peace of mind.
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-3 gap-4">
            <img src={room1} alt="Interior 1" className="rounded-md shadow" />
            <img src={room2} alt="Interior 2" className="rounded-md shadow" />
            <img src={room3} alt="Interior 3" className="rounded-md shadow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentialFortD;
