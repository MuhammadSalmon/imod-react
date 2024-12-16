// ProductDetailsButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetailsButton = ({ productId }) => {
  return (
    <Link to={`/products/${productId}`}>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition duration-300">
        Подробнее
      </button>
    </Link>
  );
};

export default ProductDetailsButton;
