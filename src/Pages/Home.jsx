import React from 'react';
import servicess from '/houses.jpg'; // Make sure this path is correct

const Home = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center justify-start"
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
  );
};

export default Home;
