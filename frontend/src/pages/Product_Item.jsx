// ProductItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, openModal }) => {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit 
      ? words.slice(0, wordLimit).join(" ") + "..." 
      : text;
  };

  return (
    <Link to={`/products/${product.id}`}>
    <div
      className="w-90 h-90 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
      >
      <img src={product.images[0].image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600">{truncateText(product.description, 5)}</p>
      </div>
    </div>
    </Link>
  );
};

export default ProductItem;
