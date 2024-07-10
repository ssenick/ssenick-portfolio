import { motion, useScroll, useTransform } from 'framer-motion';
import { memo, useRef } from 'react';

import { useTheme } from '@/app/poviders/ThemeProvider';
import ImageMe from '@/assets/me_3.png';
import { pageEaseOut } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';
import { animatePattern } from '@/helpers/func/animatePattern';
import { Header } from '@/Layout';
import { AppImage } from '@/UI/AppImage/AppImage';

import { TextSlider } from '../TextSlider/TextSlider';
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

   const valueOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
   const valueMove = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
   const valueMoveText = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

   return (
      <motion.div
         ref={ref}
         className={classNames(cls.HomeFirstScreen, {}, [className])}
         {...animatePattern(pageEaseOut)}
      >
         <Header />
         <TextSlider />
         <motion.div style={{ y: valueMove, opacity: valueOpacity }} className={cls.image}>
            <AppImage className={classNames(cls.img, { [cls.dark]: theme === 'dark' }, [])} src={ImageMe} />
         </motion.div>
         <div className={cls.wrapper}>
            <motion.div style={{ y: valueMoveText }} className={cls.main}>
               <h5>Ruslan Senchenko</h5>
               <h1>Frontend Developer</h1>
               <h3>
                  Frontend: where technology meets creativity. We create interfaces that inspire. Every line
                  of code is a stroke in a painting, with user experience at the forefront. Through a passion
                  for details and teamwork, we shape the future of web technologies. Let&apos;s create
                  something unique!
               </h3>
            </motion.div>
         </div>
      </motion.div>
   );
});

HomeFirstScreen.displayName = 'HomeFirstScreen';
export { HomeFirstScreen };
