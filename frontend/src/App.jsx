import React, { lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppLayout from './components/AppLayout';
import './i18n';
import Home from './pages/Home'
import HistoryPage from './pages/History'
import Gallery from './pages/Gallery';
import NotFoundPage from './pages/NotFondPage';
import Services from './pages/Services';
const ContactPage = lazy(() => import('./pages/Contacts'));

const ProductPage = lazy(() => import('./pages/Products'));
const NewsPage = lazy(() => import('./pages/News'));
const ProductItemPage = lazy(() => import('./pages/ProductPage'));
const VacancyPage = lazy(() => import('./pages/VacacyPage'));
const NewsDetails = lazy(() => import('./pages/NewsDetails'));
const queryClient = new QueryClient();

function App() {

  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('ru');

  const handleChangeLanguage = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppLayout handleChangeLanguage={handleChangeLanguage} language={language}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetails />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/products/:id" element={<ProductItemPage />} />
            <Route path="/vacancy" element={<VacancyPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AppLayout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;


