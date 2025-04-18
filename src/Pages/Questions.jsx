import React from "react";

const Questions = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        You Got Any Question About IBUYE? <span role="img" aria-label="thinking">🤔</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="space-y-10">
          <div style={{ backgroundColor: '#004e92' }}  className=" text-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-white mb-4"></div>
            <h4 className="font-semibold text-sm">Are There Any Regulations Or Fees For Buying Or Renting Property In Rwanda</h4>
            <p className="mt-2 text-sm">
              Yes, Rwanda Has Specific Regulations And Fees For Property Transactions. Ibuye Developers Will Guide You Through The Process, Ensuring Clarity And A Smooth Transaction.
            </p>
          </div>

          <div className="text-center">
            <div style={{ backgroundColor: '#004e92' }}  className="w-16 h-16 mx-auto rounded-full mb-4"></div>
            <p className="font-semibold text-sm mb-1">Absolutely! We Offer Full Property Management Services</p>
            <p className="text-sm text-gray-600">
              Including Tenant Screening, Rent Collection, And Maintenance.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          <div className="text-center">
            <div style={{ backgroundColor: '#004e92' }}  className="w-16 h-16 mx-auto rounded-full  mb-4"></div>
            <h4 className="font-semibold text-sm mb-1">Can You Manage My Property In Rwanda?</h4>
            <p className="text-sm text-gray-600">
              Absolutely! We Offer Full Property Management Services, Including Tenant Screening, Rent Collection, And Maintenance.
            </p>
          </div>

          <div className="text-center">
            <div style={{ backgroundColor: '#004e92' }}  className="w-16 h-16 mx-auto rounded-full  mb-4"></div>
            <h4 className="font-semibold text-sm mb-1">Is Getting A Property Title In Rwanda Easy?</h4>
            <p className="text-sm text-gray-600">
              Yes, We Help You Navigate The Process With Ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
