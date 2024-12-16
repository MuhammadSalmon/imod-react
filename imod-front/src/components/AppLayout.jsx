import React, { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LoadingSpinner from './Spinner';
const AppLayout = ({ children, handleChangeLanguage, language }) => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header handleChangeLanguage={handleChangeLanguage} language={language}  className="fixed w-full top-0 z-50" />
      
      {/* Main content area with Suspense */}
      <main className="flex-grow">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-full">
              <LoadingSpinner />
            </div>
          }
        >
          {children}
        </Suspense>
      </main>
      {/* Footer */}
      <Footer className="w-full bg-gray-800 text-white" />
    </div>

  );
};

export default AppLayout;
