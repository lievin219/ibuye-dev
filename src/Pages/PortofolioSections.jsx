import ListingCard from "./ListingCard";
import womanImg from '/buildings.jpg'; // Replace with your actual path
import manImg from '/krake.jpg';      // Replace with your actual path
import property1_img from '/property_1.jpg'
import property2_img from '/property_2.jpg'

import property3_img from '/property_3.jpg'

import property4_img from '/property_4.jpg'

import property5_img from '/property_5.jpg'

import property6_img from '/property_6.jpg'

import property7_img from '/property_7.jpg'

import property8_img from '/property_8.jpg'
   
import property9_img from '/property_9.jpg'

import property10_img from '/property_10.jpg'

import property11_img from '/property_11.jpg'

import property12_img from '/property_12.jpg'


// components/PortfolioSection.jsx
import React from 'react';

const listings = [
  {
    image: property1_img,
    price: 1250000,
    address: '440 East 56th Street, Unit 1A, Sutton Place',
    beds: 1,
    baths: 1,
    sqft: 900,
    tags: ['Listed by Compass', 'Virtual Tour'],
    desc: 'A sunlit 1-bedroom with floor-to-ceiling windows and open layout.',
  },
  {
    image: property2_img,
    price: 1250000,
    address: '333 East 53rd Street, Unit 3KL, Sutton Place',
    beds: 2,
    baths: 2,
    sqft: 1100,
    tags: ['Listed by Compass'],
    desc: 'Spacious two-bedroom apartment perfect for entertaining guests.',
  },
  {
    image: property3_img,
    price: 1299000,
    address: '440 East 56th Street, Unit 8C, Sutton Place',
    beds: 2,
    baths: 2,
    sqft: 1150,
    tags: ['Listed by Compass'],
    desc: 'Elevated living with bright interiors and elegant finishes.',
  },
  {
    image: property4_img,
    price: 1175000,
    address: '440 East 57th Street, Unit 1G, Sutton Place',
    beds: 1,
    baths: 1,
    sqft: 920,
    tags: ['Listed by Compass'],
    desc: 'Charming garden-level unit with private outdoor space.',
  },
  {
    image: property5_img,
    price: 995000,
    address: '14 Sutton Place South, Unit 7G, Sutton Place',
    beds: 1,
    baths: 1,
    sqft: 850,
    tags: ['Listed by Compass', 'Virtual Tour'],
    desc: 'Classic Manhattan charm in a quiet and prestigious neighborhood.',
  },
  {
    image: property6_img,
    price: 1350000,
    address: '315 East 58th Street, Unit 9B, Sutton Place',
    beds: 3,
    baths: 2,
    sqft: 1400,
    tags: ['Listed by Compass'],
    desc: 'Expansive 3-bedroom with balcony and skyline views.',
  },
  // Additional Listings
  {
    image: property7_img,
    price: 1425000,
    address: '123 Park Avenue, Unit 10D, Midtown East',
    beds: 2,
    baths: 2,
    sqft: 1250,
    tags: ['Listed by Compass'],
    desc: 'Modern and sleek corner unit with premium amenities.',
  },
  {
    image: property8_img,
    price: 1100000,
    address: '500 Lexington Ave, Unit 6B, Midtown',
    beds: 1,
    baths: 1,
    sqft: 880,
    tags: ['Listed by Compass', 'Virtual Tour'],
    desc: 'Stylish and centrally located unit near Grand Central.',
  },
  {
    image: property9_img,
    price: 1495000,
    address: '77 West 55th Street, Unit 15A, Midtown West',
    beds: 3,
    baths: 2,
    sqft: 1600,
    tags: ['Listed by Compass'],
    desc: 'High-rise luxury living with breathtaking city views.',
  },
  {
    image: property10_img,
    price: 975000,
    address: '301 East 69th Street, Unit 4F, Upper East Side',
    beds: 1,
    baths: 1,
    sqft: 810,
    tags: ['Listed by Compass'],
    desc: 'Quiet retreat with tree-lined views and ample sunlight.',
  },
  {
    image: property11_img,
    price: 1320000,
    address: '401 East 60th Street, Unit 8D, Lenox Hill',
    beds: 2,
    baths: 2,
    sqft: 1300,
    tags: ['Listed by Compass', 'Virtual Tour'],
    desc: 'Well-appointed residence with balcony and park access.',
  },
  {
    image: property12_img,
    price: 1199000,
    address: '245 East 72nd Street, Unit 7J, Upper East Side',
    beds: 2,
    baths: 1,
    sqft: 1025,
    tags: ['Listed by Compass'],
    desc: 'Classic elegance meets functionality in this UES co-op.',
  },
];

const PortfolioSections = () => {
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

export default PortfolioSections;
