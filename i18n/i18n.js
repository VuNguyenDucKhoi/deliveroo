import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import en from './en/lng.json';
import vi from './vi/lng.json';

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: (callback) => {
    callback(Localization.locale.split('-')[0]);
  },
  init: () => { },
  cacheUserLanguage: () => { },
};

i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .use(languageDetector)
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    debug: false,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;