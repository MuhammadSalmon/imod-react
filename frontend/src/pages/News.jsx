import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './News_Items';
import LoadingSpinner from '../components/Spinner';
import { useFetchNews } from '../api';

const NewsPage = () => {
  const {
    data: news_data = [],
    isLoading,
    error,
  } = useFetchNews()

  if (isLoading) return <LoadingSpinner />
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">Новости компании</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news_data.map((news) => (
          <NewsItem 
            key={news.id} 
            news={{ ...news, imageUrl: news.images[0]?.image }} 
          />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;

