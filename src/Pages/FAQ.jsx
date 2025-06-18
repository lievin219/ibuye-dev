// import React, { useState } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';

// const faqs = [
//   {
//     question: ' Are There Any Regulations Or Fees For Buying Or Renting Property In Rwanda?',
//     answer: 'The program lasts for 12 weeks, including weekly mentorship sessions and project work.',
//   },
//   {
//     question: '   Can You Manage My Property In Rwanda?',
//     answer: 'Absolutely! We offer full property management services including tenant screening, rent collection, and maintenance.',
//   },
//   {
//     question: '     Is Getting a Property Title in Rwanda Easy?',
//     answer: ' Yes! With IBUYE, we help you navigate the process smoothly, ensuring all legal steps are handled efficiently.',
//   },
//   {
//     question: '  Do You Handle Tenant Screening & Rent Collection?',
//     answer: ' Absolutely! From screening tenants to collecting rent and handling maintenance, we’ve got your back.',
//   },
// ];

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(prevIndex => (prevIndex === index ? null : index));
//   };

//   return (
//     <section className="bg-white-600 text-white py-12 px-4 md:px-20">
//       <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-600">
//         Frequently Asked Questions
//       </h2>

//       <div className="space-y-4">
//         {faqs.map((faq, index) => {
//           const isOpen = activeIndex === index;

//           return (
//             <div
//               key={index}
//               className="bg-[#1c1c1c] rounded-md shadow-md transition-all duration-300"
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full flex items-center justify-between px-6 py-5 text-left text-lg font-semibold"
//               >
//                 {faq.question}
//                 {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
//               </button>

//               {isOpen && (
//                 <div className="px-6 pb-5 text-gray-300 text-sm border-t border-gray-700">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default FAQ;

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Are There Any Regulations Or Fees For Buying Or Renting Property In Rwanda?',
    answer: 'Yes, Rwanda has specific regulations and fees for property transactions. Ibuye Developers will guide you through the process, ensuring clarity and a smooth transaction. ',
  },
  {
    question: 'Can You Manage My Property In Rwanda?',
    answer: 'Absolutely! We offer full property management services including tenant screening, rent collection, and maintenance.',
  },
  {
    question: 'Is Getting a Property Title in Rwanda Easy?',
    answer: 'Yes! With IBUYE, we help you navigate the process smoothly, ensuring all legal steps are handled efficiently.',
  },
  {
    question: 'Do You Handle Tenant Screening & Rent Collection?',
    answer: 'Absolutely! From screening tenants to collecting rent and handling maintenance, we’ve got your back.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-white-600 text-white py-12 px-4 md:px-20 font-poppins">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-600">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className="bg-[#1c1c1c] rounded-md shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-lg font-semibold"
              >
                {faq.question}
                {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>

              {isOpen && (
                <div className="px-6 pb-5 text-gray-300 text-sm border-t border-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;

