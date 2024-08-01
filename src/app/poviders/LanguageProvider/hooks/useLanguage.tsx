import { useCallback, useContext } from 'react';

import type { Languages } from '@/app/poviders/LanguageProvider/model/types';
import { LanguageContext } from '@/app/poviders/LanguageProvider/ui/LanguageContext';

interface ReturnValue {
   language: Languages;
   toggleLang: (language: Languages) => void;
}

export const useLanguage = (): ReturnValue => {
   const { language, changeLanguage } = useContext(LanguageContext);
   const toggleLang = useCallback(
      async (language: Languages) => {
         await changeLanguage(language);
      },
      [changeLanguage],
   );
   return {
      language,
      toggleLang,
   };
};
