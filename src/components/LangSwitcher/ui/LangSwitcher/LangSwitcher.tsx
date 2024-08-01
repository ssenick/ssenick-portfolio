import { memo } from 'react';

import { useLanguage } from '@/app/poviders/LanguageProvider';
import type { Languages } from '@/app/poviders/LanguageProvider/model/types';
import { classNames } from '@/helpers/classNames/classNames';
import { ListBox } from '@/UI/ListBox/ListBox';

import { languages } from '../../model/languages';

interface LangSwitcherProps {
   className?: string;
}

const LangSwitcher = memo((props: LangSwitcherProps) => {
   const { className } = props;
   const { language, toggleLang } = useLanguage();

   return (
      <ListBox<Languages>
         className={classNames('', {}, [className])}
         items={languages}
         onChange={toggleLang}
         value={language}
      />
   );
});

LangSwitcher.displayName = 'LangSwitcher';
export { LangSwitcher };
