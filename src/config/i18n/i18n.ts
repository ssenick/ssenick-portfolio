import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { Languages } from '@/app/poviders/LanguageProvider/model/types';
import { LANGUAGE_LOCALSTORAGE_KEY } from '@/const/localstorage';

export const initialLanguage = Languages.EN ?? 'en';

if (!localStorage.getItem(LANGUAGE_LOCALSTORAGE_KEY)) {
   localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, initialLanguage);
}
void i18n
   .use(Backend)
   // .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      lng: localStorage.getItem(LANGUAGE_LOCALSTORAGE_KEY) ?? initialLanguage,
      fallbackLng: localStorage.getItem(LANGUAGE_LOCALSTORAGE_KEY) ?? initialLanguage,
      debug: __IS_DEV__,
      backend: {
         loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      interpolation: {
         escapeValue: false, // not needed for react as it escapes by default
      },
   });

export default i18n;
