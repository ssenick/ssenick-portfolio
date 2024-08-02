import { memo } from 'react';

import { ListBox } from '@/components/UI/ListBox/ListBox';
import { classNames } from '@/helpers/classNames/classNames';
import { useLanguage } from '@/poviders/LanguageProvider';
import type { Languages } from '@/poviders/LanguageProvider/model/types';

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
