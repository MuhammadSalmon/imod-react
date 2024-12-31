import Slider from 'react-slick';

import { useTranslation } from 'react-i18next';
import { useFetchPartners } from '../api';
import LoadingSpinner from './Spinner';



const Partners = () => {
  const { i18n, t } = useTranslation();
  const {
    data: partners = [],
    isLoading,
    error,
  } = useFetchPartners();
  if (isLoading) return <LoadingSpinner />;
    if (error) return <div className="text-center text-red-600">{('failed_to_load_data')}</div>;

  const settings = {
    infinite: true,
    autoplay: true,
    speed:2500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 4,
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
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="w-full lg:w-3/4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8">{t("our_partners")}</h2>
        
        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.id} className="p-2 md:p-4">
              <img
                src={partner.image}
                alt={"Partner"}
                className="h-24 md:h-32 lg:h-30 w-auto object-contain mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
