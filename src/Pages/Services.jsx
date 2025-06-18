// import React from 'react'; 
// import krake from '/krake.jpg'

// const services = [
//   {
//     title: "Consultation",
//     description:
//       "As a real estate investor you desire a satisfactory income from your property without the inconvenience of having to manage and attend to it yourself. We maximize your earnings and minimize your expenses by applying exceptional property management skills. These include timely and proper rent collections and payments, regulatory compliance, up to date reporting and proactive property maintenanceWhere you desire to take up rental space, we help you find suitable properties that meet your needs.",
//     icon: krake, // Replace with your icon path
//   },
//   {
//     title: "Property Management & Leasing",
//     description:
//       "As a real estate investor you desire a satisfactory income from your property without the inconvenience of having to manage and attend to it yourself. We maximize your earnings and minimize your expenses by applying exceptional property management skills. These include timely and proper rent collections and payments, regulatory compliance, up to date reporting and proactive property maintenance Where you desire to take up rental space, we help you find suitable properties that meet your needs.",
//     icon: krake, // Replace with your icon path
//   },
//   {
//     title: "Investment Advisory",
//     description:
//       "As a real estate investor you desire a satisfactory income from your property without the inconvenience of having to manage and attend to it yourself. We maximize your earnings and minimize your expenses by applying exceptional property management skills. These include timely and proper rent collections and payments, regulatory compliance, up to date reporting and proactive property maintenanceWhere you desire to take up rental space, we help you find suitable properties that meet your needs.",
//     icon: krake,
//   },
//   {
//     title: "Relocation Support",
//     description:
//       "As a real estate investor you desire a satisfactory income from your property without the inconvenience of having to manage and attend to it yourself. We maximize your earnings and minimize your expenses by applying exceptional property management skills. These include timely and proper rent collections and payments, regulatory compliance, up to date reporting and proactive property maintenanceWhere you desire to take up rental space, we help you find suitable properties that meet your needs.",
//     icon:krake,
//   },
//   {
//     title: "Construction Oversight",
//     description:
//       "As a real estate investor you desire a satisfactory income from your property without the inconvenience of having to manage and attend to it yourself. We maximize your earnings and minimize your expenses by applying exceptional property management skills. These include timely and proper rent collections and payments, regulatory compliance, up to date reporting and proactive property maintenanceWhere you desire to take up rental space, we help you find suitable properties that meet your needs.",
//     icon:krake,
//   },
//   {
//     title: "Legal & Documentation",
//     description:
//       "As a real estate investor you desire a satisfactory income from your property without the inconvenience of having to manage and attend to it yourself. We maximize your earnings and minimize your expenses by applying exceptional property management skills. These include timely and proper rent collections and payments, regulatory compliance, up to date reporting and proactive property maintenanceWhere you desire to take up rental space, we help you find suitable properties that meet your needs.",
//     icon: krake,
//   },
// ];

// const Services = () => {
//   return (
//     <section className="px-6 py-12 md:px-20 bg-white">
//       {services.map((service, index) => (
//         <div
//           key={index}
//           className={`flex flex-col md:flex-row items-center justify-between gap-8 py-10 ${
//             index % 2 === 0 ? '' : 'md:flex-row-reverse'
//           }`}
//         >
//           <img
//             src={service.icon}
//             alt={service.title}
//             className="w-32 h-32"
//           />
//           <div className="max-w-xl">
//             <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
//             <p className="text-gray-700 mb-4">{service.description}</p>
//             <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
//               Get service →
//             </button>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Services;
import React from 'react'; 
import krake from '/krake.jpg';
import consultation_img from '/consultation.jpg'
import development_img from '/development.jpg'
import documentation_img from '/documentation.jpg'
import maanagement_img from '/management.jpg'
import taxes_img from '/taxes.jpg'
import diligence_img from '/diligence.jpg'
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: "Property consulting",
    description:
      "Our expert team has in-depth knowledge of Rwanda's real estate market and provides unbiased advice on off-plan, primary, secondary, and completed projects. No matter your budget, we’ll help you find the right property.",
    icon: consultation_img,
  },
  {
    title: "Property development",
    description:
      "At this stage, you have ideas for your design, and we help bring them to life. Our experienced and certified designers and engineers will guide you through the process, ensuring feasibility and practicality. ",
    icon: development_img,
  },
  {
    title: "Property management",
    description:
      "If you’ve found a plot of land or property you’re interested in, it’s important to do a thorough background check to avoid financial loss. We offer due diligence services tailored to your needs, providing essential analysis and insights for making informed real estate decisions. Our services include site inspections, valuations, title searches, zoning checks, rent schedule reviews, market trend evaluations, back of the envelope investment analysis and macroeconomic outlook. .",
    icon:maanagement_img,
  },
  {
    title: "Legal and tax services ",
    description:
      "We’re here to listen, discuss your ideas, and provide professional, unbiased advice. Book your virtual meeting today!",
    icon: taxes_img,
  },
  {
    title: "Due diligence and feasibility studies",
    description:
      "If you’ve found a plot of land or property you’re interested in, it’s important to do a thorough background check to avoid financial loss. We offer due diligence services tailored to your needs, providing essential analysis and insights for making informed real estate decisions. Our services include site inspections, valuations, title searches, zoning checks, rent schedule reviews, market trend evaluations, back of the envelope investment analysis and macroeconomic outlook. .",
    icon: diligence_img,
  },
  {
    title: "Legal & Documentation",
    description:
      "As a real estate investor you desire a satisfactory income from your property without the inconvenience of having to manage and attend to it yourself. We maximize your earnings and minimize your expenses by applying exceptional property management skills. These include timely and proper rent collections and payments, regulatory compliance, up to date reporting and proactive property maintenance. Where you desire to take up rental space, we help you find suitable properties that meet your needs.",
    icon: documentation_img,
  },
];

const Services = () => {

   const navigate=useNavigate()
  return (
    <section className="px-6 py-12 md:px-20 bg-white">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center justify-between gap-10 py-10 ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <img
            src={service.icon}
            alt={service.title}
            className="w-full max-w-md h-64 object-cover rounded-xl shadow-md"
          />
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-700 mb-6">{service.description}</p>
            <button onClick={()=>{
               navigate('/meeting')
            }} className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
              Get service →
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
