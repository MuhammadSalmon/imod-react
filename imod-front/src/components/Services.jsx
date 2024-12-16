// Services.js
import React from 'react';
import Slider from 'react-slick';
import ServiceCard from './ServiceCard';
import { FaPlug, FaLightbulb, FaBolt, FaTools } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaPlug />,
    title: 'Electrical Installation',
    description: 'High-quality installation of electrical systems for homes and businesses.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Lighting Solutions',
    description: 'Efficient lighting solutions for residential and commercial spaces.',
  },
  {
    icon: <FaBolt />,
    title: 'Energy Consulting',
    description: 'Helping you optimize energy usage for sustainability and cost-efficiency.',
  },
  {
    icon: <FaTools />,
    title: 'Maintenance & Repair',
    description: 'Regular maintenance and repair services to keep systems running smoothly.',
  },
];

const Services = () => {
  // Slider settings
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Large screens (tablets, laptops)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative container mx-auto px-4 py-12">
      <div className="w-full lg:w-3/4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        
        <Slider {...settings}>
          {servicesData.map((service, index) => (
            <div key={index} className="px-2">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
