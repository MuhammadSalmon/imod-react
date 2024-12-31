import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';


const API_URL = 'http://127.0.0.1:8000/api/';

const getTranslatedField = (item, field, lang) => {
  const langField = `${field}_${lang}`;
  return item[langField] || item[field];
};


const sendContactForm = async (data) => {
  const response = await axios.post(`${API_URL}contact/`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const useSendContactForm = () => {
  return useMutation({
    mutationFn: sendContactForm, // Pass the mutation function here
  });
};
export const useFetchProducts = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return useQuery({
    queryKey: ['products', lang],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}products/`);
      return response.data.map(item => ({
        ...item,
        name: getTranslatedField(item, 'name', lang),
        description: getTranslatedField(item, 'description', lang),
      }));
    },
  });
};

export const useFetchProductId = (id) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return useQuery({
    queryKey: ['products', id, lang],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}products/${id}/`);
      const data = response.data;
      return {
        ...data,
        name: getTranslatedField(data, 'name', lang),
        details : getTranslatedField(data, 'details', lang),
        description : getTranslatedField(data, 'description', lang),
        specifications : getTranslatedField(data, 'specifications', lang),
        
      };
    },
    enabled: !!id, // Only fetch if the id is available
  });
};


export const useFetchCategories = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return async () => {
    const response = await axios.get(`${API_URL}categories/`);
    return response.data.map(item => ({
      ...item,
      name: getTranslatedField(item, 'name', lang),
    }));
  }
};


export const useFetchCategoryId = (id) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return useQuery({
    queryKey: ['categories', id, lang],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}categories/${id}/`);
      const data = response.data;
      return {
        ...data,
        name: getTranslatedField(data, 'name', lang),
      };
    },
    enabled: !!id, // Only fetch if the id is available
  });
};

export const useFetchVacancies = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return useQuery({
    queryKey: ['vacancies', lang],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}vacancies/`);
      return response.data.map( item => ({
        ...item,
        title: getTranslatedField(item, 'title', lang),
        description: getTranslatedField(item, 'description', lang),
        location: getTranslatedField(item, 'location', lang),
      }));
    },
  });
};


export const useFetchVacancy = (id) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return useQuery({
    queryKey: ['vacancy', id, lang],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}vacancies/${id}/`);
      const data = response.data;
      return {
        ...data,
        title: getTranslatedField(data, 'title', lang),
        description: getTranslatedField(data, 'description', lang),
      };
    },
    enabled: !!id, // Only fetch if the id is available
  });
};

export const useFetchNews = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return useQuery({
    queryKey: ['news', lang],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}news/`);
      const data = response.data;
      return response.data.map( item => ({
        ...item,
        title: getTranslatedField(item, 'title', lang),
        description: getTranslatedField(item, 'content', lang),
      }));
    },
  });
};


export const useFetchNewsId = (id) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return useQuery({
    queryKey: ['news', id, lang],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}news/${id}/`);
      const data = response.data;
      return {
        ...data,
        title: getTranslatedField(data, 'title', lang),
        content: getTranslatedField(data, 'content', lang),
      };
    },
    enabled: !!id, // Only fetch if the id is available
  });
};


export const useFetchServices = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return useQuery({
    queryKey: ['services', lang],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}services/`);
      const data = response.data;
      return data.map( item => ({
        ...item,
        name: getTranslatedField(item, 'name', lang),
        description: getTranslatedField(item, 'description', lang),
      }));
    },
  });
};


export const useFetchGallery = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return useQuery({
    queryKey: ['gallery', lang],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}gallery/`);
      const data = response.data;
      return data
    },
  });
};

export const useFetchPartners = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return useQuery({
    queryKey: ['partners', lang],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}partners/`);
      const data = response.data;
      return data
    },
  });
};