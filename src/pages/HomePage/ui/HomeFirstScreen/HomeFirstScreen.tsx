import { motion, useScroll, useTransform } from 'framer-motion';
import { memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import ImageMe from '@/assets/me_half.webp';
import ImageMeSmall from '@/assets/me_half_small.webp';
import { AppImage } from '@/components/UI/AppImage/AppImage';
import { classNames } from '@/helpers/classNames/classNames';
import { Header } from '@/Layout';

import { TextSlider } from '../TextSlider/TextSlider';
import cls from './HomeFirstScreen.module.scss';

interface HomeFirstScreenProps {
   className?: string;
}

const HomeFirstScreen = memo((props: HomeFirstScreenProps) => {
   const { className } = props;
   const ref = useRef<HTMLDivElement | null>(null);
   const { t } = useTranslation('page');
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['end end', 'end start'],
   });

   const valueOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
   const valueMove = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
   const valueMoveText = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

   return (
      <div ref={ref} className={classNames(cls.HomeFirstScreen, {}, [className])}>
         <Header />
         <TextSlider />
         <motion.div style={{ y: valueMove, opacity: valueOpacity }} className={cls.image}>
            <AppImage
               className={classNames(cls.img, {}, [])}
               src={ImageMe}
               spare={ImageMeSmall}
               loading="lazy"
            />
         </motion.div>
         <div className={cls.wrapper}>
            <motion.div style={{ y: valueMoveText }} className={cls.main}>
               <h5>
                  {t('Ruslan')} {t('Senchenko')}
               </h5>
               <h1>{t('Frontend Developer')}</h1>
               <h3>{t('Frontend description')}</h3>
            </motion.div>
         </div>
      </div>
   );
});

HomeFirstScreen.displayName = 'HomeFirstScreen';
export { HomeFirstScreen };
