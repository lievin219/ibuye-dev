import React from 'react';


const reasons = [
  {
    title: "MARKET EXPERTISE",
    description: "We understand Rwanda’s real estate market inside out, combining deep local knowledge with international best practices."
  },
  {
    title: "GLOBAL PERSPECTIVE, LOCAL EXPERTISE",
    description: "We understand Rwanda’s real estate market inside out, combining deep local knowledge with international best practices."
  },
  {
    title: "REAL ESTATE, SIMPLIFIED",
    description: "Navigating real estate can be overwhelming. We break it down for you, offering clear, actionable insights tailored to your needs."
  },
  {
    title: "BUILDING THE FUTURE OF REAL ESTATE",
    description: "At Ibuye, we don’t just follow market trends – we set them. Our innovative, forward-thinking approach ensures you stay ahead in every step of your real estate journey."
  },
  {
    title: "COMMUNITY FOCUS",
    description: "We are more than just a real estate agency; we are proud contributors to the communities we serve. Our commitment extends to supporting the growth and well-being of these areas."
  },
  {
    title: "TRUSTED ADVISORS",
    description: "Our team is composed of trusted advisors who are dedicated to your success. We go beyond being mere agents; we serve as your partners in making informed real estate decisions."
  }
];

const WhyChooseIBuye = () => {
  return (
    <div className="bg-black w-screen text-white py-16 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-12">WHY CHOOSE IBUYE</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-black bg-opacity-30 p-6 rounded-lg shadow-md border border-white/10">
            <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
            <p className="text-sm text-gray-300">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseIBuye;
