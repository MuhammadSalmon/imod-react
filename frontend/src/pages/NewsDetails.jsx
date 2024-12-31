import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '../components/Spinner';
import { useFetchNewsId } from '../api';
import BacktoButton from '../components/BackTo';
import { useTranslation } from "react-i18next";

const NewsDetails = () => {
  const { id } = useParams();
  const { data: newsItem, isLoading, error } = useFetchNewsId(id);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateModal, setAnimateModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const {t} = useTranslation();
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setTimeout(() => setAnimateModal(true), 50);
  };

  const closeModal = () => {
    setAnimateModal(false);
    setTimeout(() => setIsOpen(false), 200);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsItem.images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newsItem.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );

  if (error) return <div className="text-center text-red-600">News item not found</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Image */}
      <div
        className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${newsItem.images[0]?.image})` }}
      >
       
        <div className="absolute inset-0 bg-black bg-opacity-50">
        <BacktoButton text={t("news")} />
        </div>
      </div>

      {/* Title and Description */}
      <div className="relative text-center z-10 p-4 sm:p-6 md:p-8 w-full max-w-xl lg:max-w-[90vw] mx-auto bg-white mt-4 rounded-lg shadow-lg">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 text-gray-800">{newsItem.title}</h1>
        <p className="text-xs sm:text-sm md:text-lg mb-2 text-gray-600">
          {new Date(newsItem.custom_date).toLocaleDateString()}
        </p>
        <p className="text-sm sm:text-base md:text-lg text-justify text-gray-700">{newsItem.content}</p>
      </div>

      {/* Back to List Button */}
      <div className="text-center my-4">
        
      </div>

      {/* Image Grid */}
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 mt-6">
          {newsItem.images.map((photo, index) => (
            <img
              key={index}
              src={photo.image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-32 sm:h-48 md:h-64 object-cover rounded shadow-lg cursor-pointer hover:opacity-75 transition-opacity transform hover:scale-105 duration-300"
              onClick={() => openModal(index)}
              onLoad={() => setLoading(false)}
              onError={() => setLoading(false)}
            />
          ))}
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex items-center justify-center my-4">
            <LoadingSpinner />
          </div>
        )}

        {/* Modal for viewing images */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 transition-opacity duration-300">
            <button
              className="absolute top-4 right-4 text-white text-2xl sm:text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>

            <button
              className="absolute z-40 left-4 text-white text-2xl sm:text-3xl font-bold"
              onClick={goToPrevious}
            >
              &#10094;
            </button>

            <div
              className={`relative w-full max-w-xs sm:max-w-md md:max-w-3xl max-h-full flex items-center justify-center transition-transform duration-300 ${
                animateModal ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
              }`}
            >
              <img
                src={newsItem.images[currentIndex].image}
                className="w-full h-auto max-h-screen object-contain rounded-lg shadow-lg"
                alt={`Modal Image ${currentIndex + 1}`}
              />
            </div>

            <button
              className="absolute right-4 text-white text-2xl sm:text-3xl font-bold"
              onClick={goToNext}
            >
              &#10095;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetails;
