import { motion, useScroll, useTransform } from 'framer-motion';
import { memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { TextMaskAnimated } from '@/components/TextMaskAnimated/TextMaskAnimated';
import { AppButton } from '@/components/UI/AppButton/AppButton';
import { getRouteAbout } from '@/config/route/routeConfig';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './HomeAbout.module.scss';

interface HomeAboutProps {
   className?: string;
}

const HomeAbout = memo((props: HomeAboutProps) => {
   const { className } = props;
   const { t } = useTranslation('page');
   const ref = useRef<HTMLDivElement | null>(null);

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start'],
   });
   const valueMove = useTransform(scrollYProgress, [0, 1], ['200%', '-50%']);
   return (
      <div className={classNames(cls.HomeAbout, {}, [className])}>
         <TextMaskAnimated size={'mediumSize'}>{t('HomeAbout title')}</TextMaskAnimated>
         <div ref={ref} className={cls.paragraph}>
            <TextMaskAnimated>{t('HomeAbout paragraph')}</TextMaskAnimated>
            <motion.div style={{ y: valueMove }}>
               <AppButton variant={'round'}>
                  <Link to={getRouteAbout()}>{t('HomeAbout about me')}</Link>
               </AppButton>
            </motion.div>
         </div>
      </div>
   );
});

HomeAbout.displayName = 'HomeAbout';
export { HomeAbout };
