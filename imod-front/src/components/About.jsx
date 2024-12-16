import React from 'react';
import img from '../assets/img2.jpg';
import img1 from '../assets/about_background.png';

import AnimatedLink from './Button';
import { useTranslation } from 'react-i18next';
const AboutSection = () => {

  const { i18n, t } = useTranslation();
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-auto lg:h-[100vh] w-[95vw] md:w-[90vw] lg:w-[80vw] mx-auto my-7 border border-gray-700 rounded-md overflow-hidden">
      
      {/* Left Side - Text Content */}
      <div
        className="home__about-text w-full sm:h-auto lg:w-1/2 bg-cover bg-center p-6 md:p-8 lg:p-12 md:h-full"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <h2 className="title--styled title--styled-left text-lg md:text-xl lg:text-2xl font-bold mb-4 relative pl-10">
          <span className="seperator--left absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gray-200"></span>
          {t("about_the_company")}
        </h2>

        <h1 className="main-title home__about-title text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 md:mb-6">
         {t('about_h1_1')} <br /> {t('about_h1_2')}.
        </h1>

        <p className="home__about-desc text-2xl md:text-base lg:text-lg text-gray-700 mb-4 md:mb-6">
          {t('about_p')}


        </p>

        <div className="home__about-more mt-36 sm:mt-auto">
          <AnimatedLink link='/history' />
        </div>
      </div>

      {/* Right Side - Image */}
      <div
        className="w-full lg:w-1/2 h-40 md:h-64 lg:h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
    </div>
  );
};

export default AboutSection;
