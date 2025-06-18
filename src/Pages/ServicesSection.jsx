// components/ServicesSection.jsx
import ServiceCard from './ServiceCard';
import { FaUsers, FaHome, FaProjectDiagram, FaHandshake, FaChartLine, FaFileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: <FaUsers />,
    title: 'Consultation',
    description: 'We provide an hourly consultation service, so that you can have someone to talk to, bounce your ideas off of & get professional & impartial advice.',
  },
  {
    icon: <FaHome />,
    title: 'Property Management & Leasing',
    description: 'We maximize your earnings and minimize your expenses by applying exceptional Property Management skills.',
  },
  {
    icon: <FaProjectDiagram />,
    title: 'Project Management',
    description: 'We help you with the conceptualization process, the design, construction, through to the receipt of occupancy certificates for your projects.',
  },
  {
    icon: <FaHandshake />,
    title: 'Partnership Support',
    description: 'Support and facilitate partnership building and stakeholder engagement to increase opportunities.',
  },
  {
    icon: <FaChartLine />,
    title: 'Investment Strategy',
    description: 'Design tailored investment strategies to ensure maximum returns and portfolio growth.',
  },
  {
    icon: <FaFileAlt />,
    title: 'Documentation Support',
    description: 'Assist with document preparation, processing, and submission required for your projects.',
  },
];

const ServicesSection = () => {
   const navigate=useNavigate()
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-blue-500">Our</span> Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
