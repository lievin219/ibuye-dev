import React from 'react';
import womanImg from '/buildings.jpg'; // Make sure the path is correct
import manImg from '/krake.jpg';
import { useNavigate } from 'react-router-dom';
import about1 from '/about_1.jpg'
import about2 from '/about_2.jpg'

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 md:px-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          <span className="text-blue-600">About</span>{' '}
          <span className="text-black">Us </span>
        </h2>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Text Section */}
          <div className="flex-1 text-gray-800 text-lg leading-relaxed space-y-5">
            <p>
              Your trusted real estate partners in Rwanda.
            </p>
            <p>
              We provide residential and commercial real estate services, including transactions, consulting, and property management across the country. With deep local knowledge and a global perspective, we offer expert guidance tailored to both local and international trends.
            </p>
            <p>
              Rwanda is a growing hub for real estate. Whether you're looking for an investment property, vacation home, commercial building, or land – self-built or existing, in Kigali or beyond – we are here to help.
            </p>
            <p>
              Ibuye, meaning <span className="text-blue-600 font-bold animate-pulse">‘’stone’’</span>, was born out of a need to guide those unsure of where to start and who to trust. Many have shared that this uncertainty holds them back from making investment decisions.
            </p>
            <p>
              Over the years, we have helped individuals and businesses achieve their real estate goals through consulting, development, and renovation for both residential and commercial projects. We know how important it is to have a reliable partner, and we are here to walk with you every step of the way.
            </p>

            {/* Read More Button */}
            <div className="pt-6 text-center md:text-left">
              <button
                onClick={() => {
                  navigate('/about');
                }}
                className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300 animate-pulse"
              >
                Read More
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex gap-4 justify-center items-start">
            <img
              src={about2}
              alt="Woman smiling"
              className="w-1/2 h-[400px] rounded-lg object-cover shadow-md"
            />
            <img
              src={about1}
              alt="Man smiling"
              className="w-1/2 h-[400px] rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
