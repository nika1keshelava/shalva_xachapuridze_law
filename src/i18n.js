import i18n from 'i18next'
import translationEN from './locales/en/translationEN.json';
import translationGEO from './locales/geo/translationGEO.json';

import { initReactI18next } from 'react-i18next'

const resources = {
  en:{
    translation: translationEN
  },
  geo:{
    translation: translationGEO
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'geo',

    keySeparator: false,

    interpolation:{
      escapeValue: false
    }
  });

export default i18n