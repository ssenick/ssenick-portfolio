import { motion } from 'framer-motion';
import { memo } from 'react';

import { slide } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';
import { animatePattern } from '@/helpers/func/animatePattern';

import { languages } from '../../model/languages';
import cls from './LangSwitcherMobile.module.scss';

interface LangSwitcherMobileProps {
   className?: string;
}

// TODO 1) МОБИЛЬНАЯ ВЕРСИЯ СМЕНЫ ЯЗЫКА 2) ПЕРЕВОДЫ

const LangSwitcherMobile = memo((props: LangSwitcherMobileProps) => {
   const { className } = props;

   return (
      <ul className={classNames(cls.LangSwitcherMobile, {}, [className])}>
         {languages.map(({ content }, index) => (
            <li key={content.text}>
               <FramerMagnetic>
                  <motion.button custom={index} {...animatePattern(slide)} className={cls.button}>
                     {content.text}
                  </motion.button>
               </FramerMagnetic>
            </li>
         ))}
      </ul>
   );
});

LangSwitcherMobile.displayName = 'LangSwitcherMobile';
export { LangSwitcherMobile };
