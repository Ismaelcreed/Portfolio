import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './JSON/fr.translates.json';
import en from './JSON/en.translates.json'; 
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      fr: {
        translation: fr 
      }
    },
    lng: 'en', 
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
