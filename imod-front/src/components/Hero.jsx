import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import AnimatedLink from './Button';
import { useFetchNews } from '../api';
import LoadingSpinner from './Spinner';

const HeroSection = () => {
  const [showText, setShowText] = useState(false);
  const { data: news = [], isLoading, error } = useFetchNews();

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  useEffect(() => {
    setTimeout(() => setShowText(true), 500);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: 'ease-in-out',
    speed: 2000,
    arrows: false,
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );

  if (error) return <div className="text-center text-red-600">News item not found</div>;


  return (
    <Slider {...settings}>
      {news.map((item, index) => (
        <div key={index}>
          <div
            className="relative flex items-center justify-center md:justify-start h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.images[0]?.image})`,
              backgroundRepeat: 'no-repeat',
              height: '60vh'
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 text-center md:text-left px-4 md:px-10 max-w-2xl">
              {/* Animated text */}
              <motion.h1
                initial="hidden"
                animate={showText ? 'visible' : 'hidden'}
                variants={textVariants}
                className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-6 leading-snug"
              >
                {item.title}
              </motion.h1>

              {/* Animated button */}
              <motion.div
                initial="hidden"
                animate={showText ? 'visible' : 'hidden'}
                variants={buttonVariants}
                className="flex justify-center md:justify-start"
              >
                <AnimatedLink link={`/news/${item.id}`} />
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSection;
