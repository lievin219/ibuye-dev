import React from 'react';
import servicess from '/houses.jpg'; // Make sure this path is correct

const Home = () => {
  return (
    <>
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
   
 <div className='flex flex-row gap-36 container pt-20'>
  <div className='flex flex-col'>
<h1 className='text-black font-bold pt-20'>About Ibuye</h1>
<div style={{ backgroundColor: '#004e92' }} className='text-white p-3 rounded-lg max-w-sm text-sm leading-relaxed shadow-md'>
At IBUYE,We provide residential and commercial real estate services, including transactions, property development
, consulting, and property management, with local expertise and a global perspective
</div>
  </div>
  <div>
    <img src={servicess} alt="" className='w-65 h-auto object-contain rounded shadow-md'/>
  </div>

 </div>
 </>
  );
};

export default Home;
