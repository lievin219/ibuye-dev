import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import house from '/houses.jpg';
import brian from '/brian.jpg';
import houses from '/krake.jpg';
import rwanda from '/rwanda.jpg'
import rwandaa from '/rwandaa.jpg'
import rwandaaa from '/rwandaaa.jpg'
import rwandaaaa from '/rwandaaaa.jpg'
import rwandaaaaa from '/rwandaaaaa.jpg'

const heroSlides = [rwanda,rwandaa,rwandaaa,rwandaaaa,rwandaaaaa];

const MeetInRwanda = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Image Slider */}
      <Slider {...settings}>
        {heroSlides.map((image, index) => (
          <div key={index} className="w-full h-[90vh]">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Centered Static Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white z-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold max-w-3xl">
          Meet In Rwanda
        </h2>
        
      </div>
    </div>
  );
};

export default MeetInRwanda;
