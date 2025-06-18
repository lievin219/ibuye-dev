import React from "react";
import missionImage from "/krake.jpg"; // Replace with your actual image path

const MissionVisionComponent = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={missionImage}
            alt="People discussing investment"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>

        {/* Mission and Vision Text */}
        <div className="space-y-10 text-center lg:text-left max-w-2xl">
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <span className="text-red-600 text-3xl">🚀</span>
              <h2 className="text-3xl font-bold text-gray-800">Mission</h2>
            </div>
            <p className="text-gray-700 text-lg">
              To foster Africa’s development through enabling diaspora connections and building sustainable investments.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <span className="text-red-600 text-3xl">🎯</span>
              <h2 className="text-3xl font-bold text-gray-800">Vision</h2>
            </div>
            <p className="text-gray-700 text-lg">
              An African Diaspora connected to their home countries through investments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionComponent;
