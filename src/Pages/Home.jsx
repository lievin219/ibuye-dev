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
      className="w-screen  top-0 left-0 z-10 shadow-md h-screen bg-cover bg-center flex items-center  justify-start"
      style={{ backgroundImage: `url(${servicess})` }}
    >
      <div className=" bg-opacity-60 p-8 rounded-lg   text-left flex flex-col">
        <h1 className=" text-white drop-shadow-lg text-4xl font-bold mb-4">Invest in your </h1>
       <h1 className=' text-white drop-shadow-lg text-4xl font-bold mb-4'>Future property</h1>
       <p className='text-white text-sm max-w-lg'>Ibuye represents a fresh perspective on living, acquiring
        , and possessing real estate, including opportunities for leasing.</p>
        <h1 className='text-white text-2xl font-bold mb-4'>Scroll down</h1>
      </div>
    </div>
   
    <section className="w-full bg-white py-10 px-4 md:px-10 -ml-">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8 relative">

        {/* Left Section - Text */}
        <div className="flex-1 space-y-4 relative z-10 mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">ABOUT IBUYE</h2>

          {/* Blue Box positioned to overlap the image */}
          <div style={{ backgroundColor: '#004e92' }} className=" text-white text-sm md:text-base p-4  shadow-md 
                md:absolute md:right-[-60px] md:top-14 w-full md:w-[380px] lg:w-[420px]">
            <p>
              At IBUYE, we provide residential and commercial real estate services,
              including transactions, property development, consulting, and property
              management, with local expertise and a global perspective.
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 z-0">
          <img
            src={servicess}
            alt="Skyscraper buildings"
            className="w-full h-auto object-cover rounded shadow-md"
          />
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
