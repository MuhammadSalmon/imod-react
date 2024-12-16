import React from 'react';
import { Link } from 'react-router-dom';

const VacancyItem = ({ vacancy, onSelect }) => {
  // Function to truncate the description
  const truncateDescription = (description) => {
    const words = description.split(' ');
    return words.length > 15 ? `${words.slice(0, 15).join(' ')}...` : description;
  };

  return (
    
    <div onClick={() => onSelect(vacancy.id)} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 transition-transform duration-500 ease-in-out">
      {/* Image for the vacancy */}
      {vacancy.image && (
        <div className="overflow-hidden rounded-t-lg mb-4">
          <img
            src={vacancy.image}
            alt={vacancy.title}
            className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110"
          />
        </div>
      )}

      <h2 className="text-xl font-semibold text-gray-800 mb-2">{vacancy.title}</h2>
      <p className="text-gray-700 mb-4">{truncateDescription(vacancy.description)}</p>
      
    </div>
  );
};

export default VacancyItem;

