import React from 'react';
import servicess from '/houses.jpg'; 
import Questions from './Questions';
import Contact from './Contact';
import Porto from './Porto';
import Portofolio from './Portofolio';
import Stats from './Stats';

const Home = () => {
  return (
  
   <>
   <div
  className="relative w-screen h-screen bg-cover bg-center flex items-center justify-start"
  style={{ backgroundImage: `url(${servicess})` }}
>
  {/* Black overlay */}
  <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

  {/* Text content */}
  <div className="relative z-10 p-8 text-left flex flex-col">
    <h1 className="text-white drop-shadow-lg text-4xl font-bold mb-4">Invest in your</h1>
    <h1 className="text-white drop-shadow-lg text-4xl font-bold mb-4">Future property</h1>
    <p className="text-white text-sm max-w-lg mb-4">
      Ibuye represents a fresh perspective on living, acquiring,
      and possessing real estate, including opportunities for leasing.
    </p>
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
    <h1 className="text-white text-2xl font-bold">Scroll down</h1>
  </div>
</div>

   
<section className="w-full bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 relative">

        {/* Left Section - Text */}
        <div className="flex-1 space-y-6 mt-10 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ml-0 md:ml-28 relative">
            ABOUT <span className="text-[#004e92]">IBUYE</span>
          </h2>

          {/* Blue Floating Box */}
          <div
            style={{ backgroundColor: '#004e92' }}
            className="text-white text-sm md:text-base p-6 rounded-lg shadow-xl w-full md:w-[380px] lg:w-[420px]
              transition-all duration-300 md:absolute md:right-[-60px] md:top-20 z-10"
          >
            <p>
              At <span className="font-semibold">IBUYE</span>, we provide residential and commercial real estate services,
              including transactions, property development, consulting, and property
              management, combining local expertise with a global perspective.
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 relative z-0">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={servicess}
              alt="Skyscraper buildings"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
 
 <Porto/>
 <Portofolio/>
<Stats/>
<Questions/>
 <Contact/>
 
 </>
  );
};

export default Home;
