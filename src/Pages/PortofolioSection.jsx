import ListingCard from "./ListingCard";
import womanImg from '/buildings.jpg'; // Replace with your actual path
import manImg from '/krake.jpg';      // Replace with your actual path


// components/PortfolioSection.jsx
// sections/PortfolioSection.jsx
import React from 'react';


const listings = [
  {
    image: manImg,
    price: 1250000,
    address: '440 East 56th Street, Unit 1A, Sutton Place',
    beds: 1,
    baths: 1,
    sqft: 900,
    tags: ['Listed by Compass', 'Virtual Tour'],
    desc: 'A sunlit 1-bedroom with floor-to-ceiling windows and open layout.',
  },
  {
    image: womanImg,
    price: 1250000,
    address: '333 East 53rd Street, Unit 3KL, Sutton Place',
    beds: 2,
    baths: 2,
    sqft: 1100,
    tags: ['Listed by Compass'],
    desc: 'Spacious two-bedroom apartment perfect for entertaining guests.',
  },
  {
    image: manImg,
    price: 1299000,
    address: '440 East 56th Street, Unit 8C, Sutton Place',
    beds: 2,
    baths: 2,
    sqft: 1150,
    tags: ['Listed by Compass'],
    desc: 'Elevated living with bright interiors and elegant finishes.',
  },
  {
    image: womanImg,
    price: 1175000,
    address: '440 East 57th Street, Unit 1G, Sutton Place',
    beds: 1,
    baths: 1,
    sqft: 920,
    tags: ['Listed by Compass'],
    desc: 'Charming garden-level unit with private outdoor space.',
  },
  {
    image: manImg,
    price: 995000,
    address: '14 Sutton Place South, Unit 7G, Sutton Place',
    beds: 1,
    baths: 1,
    sqft: 850,
    tags: ['Listed by Compass', 'Virtual Tour'],
    desc: 'Classic Manhattan charm in a quiet and prestigious neighborhood.',
  },
  {
    image: womanImg,
    price: 1350000,
    address: '315 East 58th Street, Unit 9B, Sutton Place',
    beds: 3,
    baths: 2,
    sqft: 1400,
    tags: ['Listed by Compass'],
    desc: 'Expansive 3-bedroom with balcony and skyline views.',
  },
];

const PortfolioSection = () => {
  return (
    <section className="px-4 md:px-16 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Listings we think you'll love</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing, index) => (
          <ListingCard key={index} {...listing} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
