import React from "react";
import rwanda from "/rwanda.jpg";
import rwandaa from "/rwandaa.jpg";
import rwandaaaa from "/rwandaaaa.jpg";

const sections = [
  {
    title: "Rwanda’s real estate market is booming, driven by rapid urbanization, a growing middle class, and strong government support. Whether for investment, residential living, or commercial development, Rwanda offers vast opportunities in a stable and business-friendly environment. ",
    image: rwanda,
    description: [
      "Let’s look at Rwanda’s economic outlook.. ","    Rwanda's GDP growth rate has been consistently strong, with an estimated growth of 8% in 2022, one of the highest in Africa. This growth is expected to continue, driving demand for both residential and commercial properties. Rwanda ranked 2nd in Sub-Saharan Africa for ease of doing business in the World Bank's 2020 report, highlighting the country’s commitment to fostering a favorable investment climate. (Source: World Bank) "
    ]
  },
  {
    title: "Why Rwanda is the Future of Property Development in Africa",
    image: rwandaa,
    description: [
      "The Kigali Convention Centre is an iconic landmark known for its stunning dome-shaped architecture.",
      "It hosts international conferences, exhibitions, and events, contributing to Kigali’s global reputation. The Kigali Convention Centre is a stunning architectural masterpiece and a symbol of Rwanda’s global vision. With its unique dome-shaped design inspired by traditional Rwandan huts, it has become a prominent venue for international summits, exhibitions, and high-level conferences. Located just minutes from the Kigali International Airport, it offers state-of-the-art facilities, including auditoriums, breakout rooms, and hospitality suites. Coupled with the adjacent Radisson Blu Hotel and scenic views of the city, it provides a seamless blend of professionalism, comfort, and cultural elegance for all types of events.",
    ],
  },
  {
    title: "Let’s look at Rwanda’s housing market.. ",
    image: rwandaaaa,
    description: [
      "Nyamirambo is a lively and culturally rich neighborhood known for its bustling streets and diverse communities.",
      "The government's Vision 2050 plan aims to have 70% of the population living in urban areas by 2050, underscoring the strategic importance of urbanization in Rwanda's future. Rwanda’s housing market needs 30,000 new units per year of which up to 75% are in the middle income category, and of which 25% to 35% of these needed in Kigali alone.  The Rwandan government has made urban planning and infrastructure develoent key priorities. The Kigali Master Plan and Vision 2050 are frameworks that guide these developments, encouraging sustainable growth in housing, commercial, and industrial sectors. Rwanda is also leading the way in green building initiatives, with an increasing focus on environmentally sustainable developments. The Kigali Green City Project is set to create a world-class eco-city and showcase Rwanda’s commitment to sustainability. Kigali, the capital city, has seen impressive growth in its real estate sector, with annual property price increases of 10-15% for both residential and commercial properties.                     (Source: Rwanda Development Board) With Rwanda becoming a popular tourist destination, the demand for vacation homes, especially around tourist spots like Volcanoes National Park and Lake Kivu, has seen significant growth. (Source: Rwanda Tourism Board) The demand for rental properties in Kigali has been increasing at a rate of about 8-10% annually, fueled by an expanding expatriate community and a growing middle class. (Source: Rwanda Development Board) The country's transparent property acquisition process guarantees secure land tenure, with each property assigned a Unique Property Identifier (UPI) for easy ownership verification. Foreigners can easily own property in Rwanda, either by purchasing an individual property or establishing a company to acquire multiple properties. ",
    ],
  },
];

const KigaliSections = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 space-y-32">
      {sections.map((section, index) => (
        <div key={index}>
          {/* Title and Intro Description */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {section.title}
            </h2>
            <p className="text-lg text-gray-600">
              {section.description[0]}
            </p>
          </div>

          {/* Image + Second Paragraph */}
          <div
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="w-full md:w-1/2 text-gray-700 text-lg leading-relaxed">
              <p>{section.description[1]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KigaliSections;
