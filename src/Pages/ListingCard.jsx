// components/ListingCard.jsx
import React from 'react';

const ListingCard = ({ image, price, address, beds, baths, sqft, tags, desc }) => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition duration-300">
      <div className="relative">
        <img src={image} alt="listing" className="w-full h-56 object-cover" />
        <div className="absolute top-2 left-2 flex flex-wrap gap-2">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className={`text-xs px-2 py-1 rounded bg-black text-white ${
                tag.toLowerCase() === 'virtual tour' ? 'bg-green-400 text-black' : ''
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">${price.toLocaleString()}</h3>
        <p className="text-sm text-gray-500 mb-2 italic">{address}</p>
        <p className="text-sm text-gray-700 mb-2">{desc}</p>
        <div className="text-sm text-gray-600 flex gap-4 font-medium">
          <span>{beds} Bed</span>
          <span>{baths} Bath</span>
          <span>{sqft} Sq. Ft.</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
