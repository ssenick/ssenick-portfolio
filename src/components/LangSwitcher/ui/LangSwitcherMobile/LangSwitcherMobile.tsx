import { motion } from 'framer-motion';
import { memo, useCallback } from 'react';

import { useLanguage } from '@/app/poviders/LanguageProvider';
import type { Languages } from '@/app/poviders/LanguageProvider/model/types';
import { slide } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';
import { animatePattern } from '@/helpers/func/animatePattern';

import { languages } from '../../model/languages';
import cls from './LangSwitcherMobile.module.scss';

interface LangSwitcherMobileProps {
   className?: string;
}

const LangSwitcherMobile = memo((props: LangSwitcherMobileProps) => {
   const { className } = props;
   const { language, toggleLang } = useLanguage();

   const handlerOnClick = useCallback(
      (value: Languages) => () => {
         const newLanguage = languages.find((lang) => value === lang.value)?.value;
         if (newLanguage) {
            toggleLang(newLanguage);
         }
      },
      [toggleLang],
   );
   return (
      <ul className={classNames(cls.LangSwitcherMobile, {}, [className])}>
         {languages.map(({ value, content }, index) => (
            <li key={content.text}>
               <FramerMagnetic>
                  <motion.button
                     custom={index}
                     onClick={handlerOnClick(value)}
                     {...animatePattern(slide)}
                     className={classNames(cls.button, { [cls.active]: language === value }, [])}
                  >
                     <span> {content.text}</span>
                  </motion.button>
               </FramerMagnetic>
            </li>
         ))}
      </ul>
   );
});

LangSwitcherMobile.displayName = 'LangSwitcherMobile';
export { LangSwitcherMobile };
