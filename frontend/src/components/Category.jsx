import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useFetchProducts } from '../api';
import LoadingSpinner from './Spinner';
import { useTranslation } from 'react-i18next';

// Example category data


const CategoryPage = () => {
  const { i18n, t } = useTranslation();
  const {data: products = [],
    isLoading: productsLoading,
    error: productsError,} = useFetchProducts();

  if (productsLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner /> {/* Show loading spinner */}
      </div>
    );
  }

  if (productsError) {
    return <div className="text-center text-red-600">Failed to load data.</div>;
  }
  return (
    <div className="category-page-container max-w-7xl mx-auto py-12 px-4">
      {/* <h1 className="text-3xl font-bold text-center mb-10">Категории продуктов</h1>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="category-card bg-white shadow-md rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={`/products`} className="block">
              <div className="relative">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-48 sm:h-64 lg:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl font-semibold">
                    View {category.name}
                  </span>
                </div>
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold">{category.name}</h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div> */}

      {/* Popular Products Section */}
      <h2 className="text-3xl font-bold text-center mb-10">{t("pop_product")}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="product-card bg-white shadow-md rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={`/products`} className="block">
              <div className="relative">
                <img
                  src={product.images[0].image}
                  alt={product.name}
                  className="w-full h-48 sm:h-64 lg:h-72 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
