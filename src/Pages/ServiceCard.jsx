// components/ServiceCard.jsx
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ icon, title, description }) => {
   const navigate=useNavigate()

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center flex flex-col items-center">
      <div className="text-blue-500 text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button onClick={()=>{
        navigate('/service')
      }} className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-800 transition">
        Learn More <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default ServiceCard;
