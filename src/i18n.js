import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import arabic from './locales/ar/translation.json';
import english from './locales/en/translation.json';
import danish from './locales/da/translation.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: {
      ar: {
        translation: arabic
      },
      en: {
        translation: english
      },
      da: {
        translation: danish
      }
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
