import React from "react";
import { FaQuestionCircle, FaHome, FaKey, FaUserShield } from "react-icons/fa";

const Questions = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Got Any Questions About IBUYE? <span role="img" aria-label="thinking">🤔</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-[#004e92] text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#004e92] mx-auto mb-4">
            <FaUserShield className="text-xl" />
          </div>
          <h4 className="font-semibold text-md text-center">
            Are There Any Regulations Or Fees For Buying Or Renting Property In Rwanda?
          </h4>
          <p className="mt-3 text-sm text-center">
            Yes, Rwanda has specific regulations and fees for property transactions.
            Ibuye Developers will guide you through the process, ensuring clarity and a smooth transaction.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#004e92] text-white mx-auto mb-4">
            <FaHome className="text-xl" />
          </div>
          <h4 className="font-semibold text-md mb-2">
            Can You Manage My Property In Rwanda?
          </h4>
          <p className="text-sm">
            Absolutely! We offer full property management services,
            including tenant screening, rent collection, and maintenance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#004e92] text-white mx-auto mb-4">
            <FaKey className="text-xl" />
          </div>
          <h4 className="font-semibold text-md mb-2">
            Is Getting a Property Title in Rwanda Easy?
          </h4>
          <p className="text-sm">
            Yes! With IBUYE, we help you navigate the process smoothly, ensuring all legal steps are handled efficiently.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#004e92] text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#004e92] mx-auto mb-4">
            <FaQuestionCircle className="text-xl" />
          </div>
          <h4 className="font-semibold text-md mb-2">
            Do You Handle Tenant Screening & Rent Collection?
          </h4>
          <p className="text-sm">
            Absolutely! From screening tenants to collecting rent and handling maintenance, we’ve got your back.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
