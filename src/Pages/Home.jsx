import React from 'react';

import Questions from './Questions';
import Contact from './Contact';

import Header from '../components/Header';
import AboutUs from './AboutUs';
import ServicesSection from './ServicesSection';
import PortfolioSection from './PortofolioSection';
import FAQ from './FAQ';
import WhyRwand from './WhyRwand';
import PortfolioSections from './PortofolioSections';

const Home = () => {
  return (
    <>
    <Header/>
    <AboutUs/>
    <ServicesSection/>
    <PortfolioSections/>
    <WhyRwand/>

    <FAQ/>

     

  
    
      <Contact />
    </>
  );
};

export default Home;
