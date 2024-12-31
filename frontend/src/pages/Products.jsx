import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductItem from './Product_Item';
import LoadingSpinner from '../components/Spinner';
import { useFetchProducts, useFetchCategories } from '../api';
import ProductItemPage from './ProductPage';
import { useTranslation } from 'react-i18next';

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(0); // Default to "All" category with ID 0
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastVisitedPage, setLastVisitedPage] = useState(1); // To track the last visited page for "All"
  const itemsPerPage = 10;

  const { i18n, t } = useTranslation();
  const fetchCategories = useFetchCategories();

  const {
    data: categories = [],
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const data = await fetchCategories();
      return [{ id: 0, name: 'Все' }, ...data];
    },
  });

  const {
    data: products = [],
    isLoading: productsLoading,
    error: productsError,
  } = useFetchProducts();


  // Filter products based on selected category ID
  const filteredProducts = selectedCategory === 0
    ? products
    : products.filter((product) => product.category === selectedCategory);

  // Calculate the products to display based on pagination
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleCategoryChange = (categoryId) => {
    if (categoryId === 0) {
      setCurrentPage(lastVisitedPage); // Restore last page for "All" category
    } else {
      setCurrentPage(1); // Reset to the first page for specific categories
    }
    setSelectedCategory(categoryId);
  };

  if (categoriesLoading || productsLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner /> {/* Show loading spinner */}
      </div>
    );
  }

  if (categoriesError || productsError) {
    return <div className="text-center text-red-600">Failed to load data.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className='text-center text-3xl my-5'>{t("our_products")}</h1>
      {/* Categories Dropdown */}
      <div className="w-full flex justify-center mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(Number(e.target.value))}
          className="p-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            openModal={() => openModal(product)}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => {
                handlePageChange(index + 1);
                if (selectedCategory === 0) {
                  setLastVisitedPage(index + 1); // Update last visited page for "All"
                }
              }}
              className={`px-4 py-2 mx-1 rounded-md ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

      {/* Modal */}
      {/* {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-3/4 max-w-2xl h-3/4 p-6 relative overflow-y-auto rounded-lg">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold"
            >
              &times;
            </button>
            <div className="flex flex-col items-center my-14">
              <h3 className="text-3xl font-semibold text-gray-800 mb-8">{selectedProduct.name}</h3>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full max-w-md h-60 object-cover mb-8" />
              <p className="text-gray-700 text-lg text-center">{selectedProduct.description}</p>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ProductPage;
