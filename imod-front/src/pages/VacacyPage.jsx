import React, { useState } from 'react';
import img3 from "../assets/stats.jpg";
import LoadingSpinner from '../components/Spinner';
import VacancyItem from './VacancyItem';
import VacancyDetailsModal from './VacancyDetailsModal';
import { useTranslation } from 'react-i18next';
import { useFetchVacancies } from '../api';

const VacancyPage = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVacancyId, setSelectedVacancyId] = useState(null);

  const {
    data: vacancies = [],
    isLoading,
    error,
  } = useFetchVacancies();

  const openModal = (id) => {
    setSelectedVacancyId(id);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
    setSelectedVacancyId(null);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="text-center text-red-600">{t('failed_to_load_data')}</div>;

  return (
    <>
      {/* Header Section */}
      <header className="relative bg-cover bg-center h-64 sm:h-80 md:h-96" style={{ backgroundImage: `url(${img3})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10 p-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">{t('vacancy_h1')}</h1>
          <p className="text-sm sm:text-base md:text-lg max-w-lg">{t("vacancy_p")}</p>
        </div>
      </header>

      {/* Vacancies Section */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-gray-900">{t('vacancies')}</h1>
        
        {/* Vacancy Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {vacancies.length < 1 ? (
            <h2 className="text-center col-span-full text-gray-700">{t('no_vacancies')}</h2>
          ) : (
            vacancies.map((vacancy) => (
              <VacancyItem key={vacancy.id} vacancy={vacancy} onSelect={openModal} />
            ))
          )}
        </div>
      </div>

      {/* Modal for Vacancy Details */}
      {modalOpen && (
        <VacancyDetailsModal
          isOpen={modalOpen}
          onClose={closeModal}
          vacancyId={selectedVacancyId}
          vacancy={vacancies.find(v => v.id === selectedVacancyId)}
        />
      )}
    </>
  );
};

export default VacancyPage;
