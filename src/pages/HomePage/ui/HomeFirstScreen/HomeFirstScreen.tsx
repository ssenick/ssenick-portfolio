import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { memo, useRef } from 'react';

import { useTheme } from '@/app/poviders/ThemeProvider';
import ImageFront from '@/assets/front.svg?react';
import ImageMe from '@/assets/me_3.png';
import { classNames } from '@/helpers/classNames/classNames';
import { Header } from '@/Layout';
import { AppImage } from '@/UI/AppImage/AppImage';

import cls from './HomeFirstScreen.module.scss';

interface HomeFirstScreenProps {
   className?: string;
}

const HomeFirstScreen = memo((props: HomeFirstScreenProps) => {
   const { className } = props;
   const { theme } = useTheme();
   const ref = useRef<HTMLDivElement | null>(null);

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['end end', 'end start'],
   });

   useMotionValueEvent(scrollYProgress, 'change', (latest) => {
      console.log('x changed to', latest);
   });

   // const valueOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
   const valueMove = useTransform(scrollYProgress, [0, 1], ['0%', '13%']);
   const valueMoveText = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

   useMotionValueEvent(scrollYProgress, 'change', (latest) => {
      console.log('x changed to', latest);
   });

   return (
      <div ref={ref} className={classNames(cls.HomeFirstScreen, {}, [className])}>
         <Header />
         <ImageFront className={classNames(cls.svg, { [cls.dark]: theme === 'dark' }, [])} />
         <motion.div style={{ y: valueMove }} className={cls.image}>
            <AppImage className={classNames(cls.img, { [cls.dark]: theme === 'dark' }, [])} src={ImageMe} />
         </motion.div>
         <div className={cls.wrapper}>
            <motion.div style={{ y: valueMoveText }} className={cls.main}>
               <h5>Ruslan Senchenko</h5>
               <h1>Frontend Developer</h1>
               <h3>
                  Over the past 9 years, as an art director and designer, I’ve worked with big companies and
                  up-and-coming startups to successfully help them reach their full potential and attract new
                  customers.
               </h3>
            </motion.div>
         </div>
      </div>
   );
});

HomeFirstScreen.displayName = 'HomeFirstScreen';
export { HomeFirstScreen };
