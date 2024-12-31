import { useTranslation } from 'react-i18next';
import { useFetchServices } from '../api';
import LoadingSpinner from '../components/Spinner';
const Services = () => {
  const { t } = useTranslation();
 const {
  data: services = [],
  isLoading,
  error,
} = useFetchServices();
if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="text-center text-red-600">{t('failed_to_load_data')}</div>;

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold text-center justify-center uppercase mt-8 relative ">
        {t("services")}
        <hr className="absolute bottom-[-0.5rem]  w-full h-1 bg-blue-800" />
      </h1>
      <div className="max-w-7xl mx-auto p-8 flex flex-wrap justify-around">
        {services.map((service, index) => (
          <div
            key={index}
            className=" rounded-lg shadow-lg p-6 text-center hover:scale-105 hover:shadow-blue-950 transition-transform duration-300 m-4 w-80"
          >
           <div>
            <img src={service.image} alt="" />
           </div>
            <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
            <p className=" mb-4">{service.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
