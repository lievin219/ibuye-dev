import React from 'react';
import buildingImg from '/mother.jpg'; // Ensure the path is correct

const WhyRwand = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          <span className="text-black">WHY</span>{' '}
          <span className="text-blue-600">RWANDA</span>
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Content */}
          <div className="w-full md:w-[45%]">
            <img
              src={buildingImg}
              alt="Building"
              className="w-full h-[450px] rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-[55%] text-gray-800 text-lg leading-relaxed space-y-5">
            <p>
              What if <span className="text-blue-600 font-semibold">RWANDANS</span> could seamlessly access real estate services at home?
              This is the question that a decade ago became the seed that bore The Diaspora Access.
            </p>
            <p>
              With an operating history of 10 years, the business was born to meet a need by many Kenyans
              living abroad to eventually come back home. This was bolstered by conversations that cited 
              ‘not knowing where to start and who to trust’ as a major deterrent to their investment 
              decisions. They were busy abroad & investing at home was too cumbersome and nebulous.
            </p>
            <p>
              <span className="font-bold text-blue-600">Why Rwanda?</span> Vision 2050 targets 70% urban population by 2050 — real estate demand will surge.
              30,000 new housing units are needed annually, especially for middle-income earners. 
              Strategic plans like the Kigali Master Plan guide sustainable urban development. 📐
              Kigali Green City Project leads the way in eco-friendly development.
              Property values in Kigali rise 10–15% annually for both residential and commercial. 
              Growing tourism drives vacation home demand near Lake Kivu and Volcanoes NP. 🏞️
              Kigali’s rental demand grows 8–10% per year from expatriates and middle class. 🏘️
              Transparent property acquisition: every property has a Unique Property Identifier. 
              Foreigners can own property directly or through companies. 🌐
            </p>
            <p>
              Real estate provides a passive investment avenue, allowing you to work & raise your family abroad
              while simultaneously growing a portfolio at home.
            </p>
            <p>
              We understand that as our client you need a partner that will understand your needs and is 
              committed to delivering for you. We are a facilitator and an advocate, walking with you in your
              investment journey.
            </p>

            {/* Read More Button */}
            <div className="pt-6 text-center md:text-left">
              <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300 animate-pulse">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRwand;
