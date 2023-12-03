import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en} from './assets/locales/en/en';
import {ru} from './assets/locales/ru/ru';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: 'en',
    resources,
    fallbackLng: 'en',
  })
  .then();

export default i18n;
