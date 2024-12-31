// ServiceCard.js
import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 transition-transform transform hover:scale-105 hover:shadow-xl text-center">
      <div className="text-5xl text-yellow-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
