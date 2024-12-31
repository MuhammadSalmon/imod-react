import React, { useState } from "react";
import LoadingSpinner from "../components/Spinner"; // Your spinner component
import { useFetchGallery } from "../api"; // Your custom hook for fetching images

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateModal, setAnimateModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [flexValue, setFlexValue] = useState("w-1/2");
  const [activeButton, setActiveButton] = useState(2);

  const { data: photos = [], isLoading, error } = useFetchGallery();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="text-center text-red-600">Failed to load data</div>;

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
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleFlexChange = (value, buttonIndex) => {
    setFlexValue(value);
    setActiveButton(buttonIndex);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>

      <div className="flex justify-center gap-4 mb-4">
        {["w-full", "w-1/2", "w-1/3"].map((value, index) => (
          <button
            key={value}
            onClick={() => handleFlexChange(value, index + 1)}
            className={`px-4 py-2 rounded-md hover:bg-slate-600 transition ${
              activeButton === index + 1
                ? "bg-blue-500 text-white"
                : "bg-blue-950 text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`p-2 ${flexValue}`}
            onClick={() => openModal(index)}
          >
            <img
              src={photo.image}
              alt={photo.alt || "Image"}
              className="w-full h-auto rounded shadow-lg cursor-pointer hover:opacity-75 transition-opacity"
              onLoad={() => setLoading(false)}
              onError={() => setLoading(false)}
            />
          </div>
        ))}
      </div>

      {loading && (
        <div className="flex items-center justify-center my-4">
          <LoadingSpinner />
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 transition-opacity duration-300">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={closeModal}
          >
            &times;
          </button>

          <button
            className="absolute left-4 text-white text-3xl font-bold"
            onClick={goToPrevious}
          >
            &#10094;
          </button>

          <div
            className={`relative max-w-4xl max-h-full flex items-center justify-center transition-transform duration-300 ${
              animateModal ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            <img
              src={photos[currentIndex].image}
              alt={photos[currentIndex].alt || "Image"}
              className="w-full h-auto max-h-screen object-contain rounded-lg shadow-lg"
            />
          </div>

          <button
            className="absolute right-4 text-white text-3xl font-bold"
            onClick={goToNext}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
