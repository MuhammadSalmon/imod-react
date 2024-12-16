import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationRU from './locales/ru/translation.json';
import translationEN from './locales/en/translation.json';
import translationTj from './locales/tg/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    tg: { translation: translationTj },
    ru: { translation: translationRU },
    en: { translation: translationEN },
  },
  lng: 'ru', // default language
  fallbackLng: 'ru',
  interpolation: { escapeValue: false },
});

export default i18n;
