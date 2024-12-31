import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import { useTranslation } from 'react-i18next';
const HistoryPage = () => {
  const {t } = useTranslation();

  const historyData = {
    title: 'История предприятия завода «Имод»',
    date: 'ДУШАНБЕ, 31.10.2023',
    description: t('history_1_p'),
    additionalInfo: t('history_2_p'),
    images: [
      img1,
      img2,
      img3,
    ],
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">{historyData.title}</h1>
      <p className="text-gray-700 text-center mb-4 italic">{historyData.date}</p>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        {historyData.images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`ImodZavod Image ${index + 1}`}
            className="w-full lg:w-1/3 h-64 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        ))}
      </div>

      {/* Description Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <p className="text-lg text-gray-800 mb-4">{historyData.description}</p>
        <p className="text-lg text-gray-800">{historyData.additionalInfo}</p>
      </div>

      {/* Additional Section with Key Information */}
      <div className="bg-blue-50 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('histort_key_info')}</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>{t('history_key_info_1')}</li>
          <li>{t('history_key_info_2')}</li>
          <li>{t('history_key_info_3')}</li>
          <li>{t('history_key_info_4')}</li>
          
        </ul>
      </div>

      {/* Summary Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-700">
          {t('history_key_info_5')}
        </p>
      </div>
    </div>
  );
};

export default HistoryPage;
