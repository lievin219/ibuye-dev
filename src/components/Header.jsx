
// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import house from'/houses.jpg'
// import brian from '/brian.jpg'
// import houses from '/krake.jpg'

// const heroSlides = [
//   {
//     image: houses,
//     title: 'A Sanctuary of Comfort and Quality',
//     location: 'KIBAGABAGA, kIGALI — Price Upon Request',
//   },
//   {
//     image: brian,
//     title: 'Elegant Living by the Water',
//     location: 'NYARUTARAMA, KIMIRONKO — From $2.4M',
//   },
//   {
//     image: house,
//     title: 'Luxury Meets Tranquility',
//     location: 'KACYIRU, KIGALI — Contact for Price',
//   },
// ];

// const Header = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 1000,
//     autoplaySpeed: 5000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//   };

//   return (
//     <div className="relative w-full h-[90vh] overflow-hidden">
//       <Slider {...settings}>
//         {heroSlides.map((slide, index) => (
//           <div key={index} className="w-full h-[90vh] relative">
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-8 md:px-20 text-white">
//               <h2 className="text-3xl md:text-5xl font-bold max-w-3xl">{slide.title}</h2>
//               <p className="mt-4 text-lg md:text-xl">{slide.location}</p>
//               <button className="mt-6 bg-blue-600 hover:bg-b-700 text-white px-6 py-2 rounded">
//                 Explore Now →
//               </button>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Header;
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import property_1 from '/property_10.jpg'
import property_2 from '/property_12.jpg'
import property_3 from '/property_11.jpg'
import brian from '/brian.jpg';
import houses from '/krake.jpg';
import { useNavigate } from 'react-router-dom';



const heroSlides = [
  {
    image: property_1,
    title: 'Modern Family Home in a Peaceful Neighborhood',
    location: 'KIBAGABAGA, KIGALI — Starting from 150M RWF',
  },
  {
    image: property_2,
    title: 'Elegant Villas Overlooking Nyarutarama Golf Course',
    location: 'NYARUTARAMA, KIGALI — From $2.4M',
  },
  {
    image: property_3,
    title: 'Luxury Apartments Close to City Center',
    location: 'KACYIRU, KIGALI — Price Upon Request',
  },
];


const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 900,           // Faster transition duration
    autoplaySpeed: 3000,  // Faster slide change
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
   const navigate=useNavigate()

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Slider {...settings}>
        {heroSlides.map((slide, index) => (
          <div key={index} className="w-full h-[90vh] relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-8 md:px-20 text-white">
              <h2 className="text-3xl md:text-5xl font-bold max-w-3xl">{slide.title}</h2>
              <p className="mt-4 text-lg md:text-xl">{slide.location}</p>
              <button onClick={()=>{navigate('/portfolio')}} className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
                Explore Now →
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Header;

