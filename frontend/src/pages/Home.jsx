import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import BannerSection from '../components/BannerSection';
import './Home.css'; // Custom CSS for the component
import HeroSection from '../components/Hero';
import CategoryPage from '../components/Category';
import Partners from '../components/Partners';
import Statistics from '../components/Statistic';
import AboutPage from '../components/About';


const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slides = [
    { img: img1, caption: 'Caption Text 1' },
    { img: img2, caption: 'Caption Text 2' },
    { img: img3, caption: 'Caption Text 3' },
  ];
  

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      const newIndex = (prevIndex + n + slides.length - 1) % slides.length + 1;
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <>
      <HeroSection />
      <AboutPage />
      <Statistics />
      <CategoryPage />
      <Partners />
    </>
  );
};

export default Slideshow;
