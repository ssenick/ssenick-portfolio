import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { Languages } from '@/components/LangSwitcher/model/types';
import { LANGUAGE_LOCALSTORAGE_KEY } from '@/const/localstorage';
import { classNames } from '@/helpers/classNames/classNames';
import { ListBox } from '@/UI/ListBox/ListBox';

import { languages } from '../../model/languages';

interface LangSwitcherProps {
   className?: string;
}

const LangSwitcher = memo((props: LangSwitcherProps) => {
   const { className } = props;
   const { i18n } = useTranslation();

   const [value, setValue] = useState<Languages>(
      (localStorage.getItem(LANGUAGE_LOCALSTORAGE_KEY) as Languages) ?? languages[0].value,
   );

   const toggleLang = useCallback(
      async (language: Languages) => {
         setValue(language);
         localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, language);
         await i18n.changeLanguage(language);
      },
      [i18n],
   );

   return (
      <ListBox<Languages>
         className={classNames('', {}, [className])}
         items={languages}
         onChange={toggleLang}
         value={value}
      />
   );
});

LangSwitcher.displayName = 'LangSwitcher';
export { LangSwitcher };
