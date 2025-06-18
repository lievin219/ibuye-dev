import React from 'react';
import bannerImage from '/brian.jpg';
import { FaBuilding, FaTools, FaCogs, FaBalanceScale, FaSearch } from 'react-icons/fa';
import ServiceGrid from './ServiceGrid';
import Services from './Services';

const serviceData = [
  {
    title: '1. Residential/Commercial Property Consulting',
    description:
      'Explore our extensive portfolio of carefully curated properties. We provide high-quality listings to help you find the perfect match for your needs.',
    icon: <FaBuilding size={28} />,
  },
  {
    title: '2. Residential/Commercial Property Development',
    description:
      'Our experienced team guides you through the entire development process—from design to construction.',
    icon: <FaTools size={28} />,
  },
  {
    title: '3. Residential/Commercial Property Management',
    description:
      'Trust us to manage your properties with care, efficiency, and attention to detail.',
    icon: <FaCogs size={28} />,
  },
  {
    title: '4. Legal and Tax Services',
    description:
      'We offer tailored legal and tax services for seamless real estate transactions.',
    icon: <FaBalanceScale size={28} />,
  },
  {
    title: '5. Due Diligence and Feasibility Studies',
    description:
      'Make informed decisions with our in-depth studies and professional guidance.',
    icon: <FaSearch size={28} />,
  },
];

const ServicesPage = () => {
  return (
    <>
   <Services/>
    
    </>
  );
};

export default ServicesPage;
