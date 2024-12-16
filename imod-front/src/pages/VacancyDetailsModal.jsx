import React from 'react';
import LoadingSpinner from '../components/Spinner';
import { useFetchVacancy } from '../api';

const VacancyDetailsModal = ({ isOpen, onClose, vacancyId }) => {
  // Fetch vacancy data using the custom hook
  const { data: vacancy, isLoading, error } = useFetchVacancy(vacancyId);

  // Close the modal if not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <div className="p-6 relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold"
            aria-label="Close modal"
          >
            &times;
          </button>

          {/* Loading spinner or error message */}
          {isLoading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="text-red-600">{error.message || "Failed to load vacancy details"}</div>
          ) : !vacancy ? (
            <div className="text-gray-700">Vacancy not found</div>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">{vacancy.title}</h1>
              {vacancy.image && (
                <div className="mb-4">
                  <img
                    src={vacancy.image}
                    alt={vacancy.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              )}
              <p className="text-gray-700 mb-6">{vacancy.description}</p>
              <div className="mt-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h2>
                <p>Email: <a href="mailto:example@example.com" className="text-blue-600">hr@imod.tj</a></p>
                <p>Phone: <a href="tel:988774455" className="text-blue-600">411116666</a></p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VacancyDetailsModal;
