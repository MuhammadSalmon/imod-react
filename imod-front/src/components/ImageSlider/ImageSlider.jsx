import React, { useState } from 'react';
import './ImageSlider.css'; // Make sure to create this file for CSS
import { useFetchProductId } from '../../api';

const ImageSlider = ({ id }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const {
    data: product = {},
    isLoading,
    error,
  } = useFetchProductId(id);
  // Check if product.images exists and has elements
  const  images =[
    { src: product.images[0]?.image, thumbnailSrc: product.images[0].image, alt: product.name },
    { src: product.images[1]?.image, thumbnailSrc: product.images[1].image, alt: product.name },
    { src: product.images[2]?.image, thumbnailSrc: product.images[2].image, alt: product.name },
    { src: product.images[3]?.image, thumbnailSrc: product.images[3].image, alt: product.name },
    
  ]
  const showSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > images.length) newIndex = 1;
    if (newIndex < 1) newIndex = images.length;
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  if (images.length === 0) {
    return <p>No images available.</p>; // Display a fallback message if there are no images
  }

  return (
    <div className="container h-1/2">
      {/* Full-width images with number text */}
      {images.map((image, index) => (
        <div
          key={index}
          className="mySlides"
          style={{ display: slideIndex === index + 1 ? 'block' : 'none' }}
        >
          <div className="numbertext">
            {index + 1} / {images.length}
          </div>
          <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
        </div>
      ))}

      {/* Next and previous buttons */}
      <a className="prev" onClick={() => showSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => showSlides(1)}>
        &#10095;
      </a>

      {/* Image text */}
      <div className="caption-container">
        <p id="caption">{images[slideIndex - 1]?.alt}</p>
      </div>

      {/* Thumbnail images */}
      <div className="row">
        {images.map((image, index) => (
          <div className="column" key={index}>
            <img
              className={`demo cursor ${slideIndex === index + 1 ? 'active' : ''}`}
              src={image.thumbnailSrc || image.src}
              style={{ width: '100%' }}
              onClick={() => currentSlide(index + 1)}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
