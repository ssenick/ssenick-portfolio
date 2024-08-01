import type { FC, PropsWithChildren } from 'react';
import { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Languages } from '@/app/poviders/LanguageProvider/model/types';
import { initialLanguage } from '@/config/i18n/i18n';
import { LANGUAGE_LOCALSTORAGE_KEY } from '@/const/localstorage';

interface LanguageContextProps {
   language: Languages;
   changeLanguage: (lng: Languages) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
   language: Languages.EN,
   changeLanguage: () => ({}),
});

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
   const { i18n } = useTranslation();

   const [language, setLanguage] = useState<Languages>(
      (localStorage.getItem(LANGUAGE_LOCALSTORAGE_KEY) as Languages) ?? initialLanguage,
   );

   const changeLanguage = async (lng: Languages) => {
      setLanguage(lng);
   };

   useEffect(() => {
      localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, language);
      void i18n.changeLanguage(language);
   }, [language, i18n]);

   return (
      <LanguageContext.Provider
         value={{
            language,
            changeLanguage,
         }}
      >
         {children}
      </LanguageContext.Provider>
   );
};
