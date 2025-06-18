import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MeetInRwanda from './MeetInRwanda';
import KigaliSections from './KigaliSections';

const WhyRwandaPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div
      className="pt-28  bg-gradient-to-b   bg-white"
      style={{ fontFamily: '"Times New Roman", serif' }}
    >
      <MeetInRwanda/>
      <KigaliSections/>
     
      </div>
  
  );
};

export default WhyRwandaPage;
