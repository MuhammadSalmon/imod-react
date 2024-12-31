import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import { Link } from 'react-router-dom';

const HeroSection1 = () => {
  const images = [img1, img2, img3];
  const [showText, setShowText] = useState(false);

  // React Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true, // Smooth fade between slides
  };

  // Animation for text and button
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  // Trigger text animation on load
  useEffect(() => {
    setTimeout(() => setShowText(true), 500);
  }, []);

  return (
    <Slider {...settings} className="relative h-[80vh] md:h-screen">
      {images.map((image, index) => (
        <div key={index} className="relative flex items-center justify-start h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          {/* Content Section */}
          <div className="relative z-10 text-left px-4 md:px-10 max-w-2xl">
            {/* Animated text */}
            <motion.h1
              initial="hidden"
              animate={showText ? 'visible' : 'hidden'}
              variants={textVariants}
              className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 leading-snug"
            >
              Предприятие по производству электрооборудования «Имод».
            </motion.h1>

            {/* Animated button */}
            <motion.div
              initial="hidden"
              animate={showText ? 'visible' : 'hidden'}
              variants={buttonVariants}
            >
              <Link
                to="/history"
                className="px-6 md:px-8 py-2 md:py-3 bg-blue-600 text-white rounded-full text-lg md:text-xl hover:bg-blue-700 transition-colors"
              >
                Начать
              </Link>
            </motion.div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSection1;
