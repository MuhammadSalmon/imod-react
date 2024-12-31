import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFetchCategoryId, useFetchProductId } from "../api";
import ImageSlider from '../components/ImageSlider/ImageSlider'


const ProductItemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Fetch product data
  const {
    data: product = {},
    isLoading,
    error,
  } = useFetchProductId(id);
  
  const {
    data: caregory = {},
  } = useFetchCategoryId(product.id);
console.log(product)

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back to Product List Button */}
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="text-blue-500 hover:underline text-3xl mb-4"
      >
        &larr; 
      </button>

      {/* Title */}
      <h1 className="text-3xl font-semibold text-center mb-8">{product.name}</h1>

      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
        {/* Left Column: Image Slider */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
         <ImageSlider id={id} />
        </div>

        {/* Right Column: Details and Specifications */}
        <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6">
          {/* Product Description */}
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Product Details */}
          <h2 className="text-xl font-semibold mb-2">{t("Product Details")}</h2>
          <p className="text-gray-700 mb-4">{product.details || "No details available."}</p>

          {/* Specifications */}
          <h3 className="text-lg font-medium mb-2">{t("Specifications")}</h3>
          <p className="text-gray-700 mb-4">{product.specifications || "No specifications available."}</p>

          {/* Category Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span>Категория: </span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              {caregory.name || "No category"}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductItemPage;
