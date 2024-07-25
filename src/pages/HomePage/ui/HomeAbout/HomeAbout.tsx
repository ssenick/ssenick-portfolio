import { motion, useScroll, useTransform } from 'framer-motion';
import { memo, useRef } from 'react';
import { Link } from 'react-router-dom';

import { TextMaskAnimated } from '@/components/TextMaskAnimated/TextMaskAnimated';
import { getRouteAbout } from '@/config/route/routeConfig';
import { classNames } from '@/helpers/classNames/classNames';
import { AppButton } from '@/UI/AppButton/AppButton';

import cls from './HomeAbout.module.scss';

interface HomeAboutProps {
   className?: string;
}

const HomeAbout = memo((props: HomeAboutProps) => {
   const { className } = props;
   const ref = useRef<HTMLDivElement | null>(null);

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start'],
   });
   const valueMove = useTransform(scrollYProgress, [0, 1], ['100%', '-50%']);
   return (
      <div className={classNames(cls.HomeAbout, {}, [className])}>
         <TextMaskAnimated margin={'-9%'} size={'mediumSize'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate fuga necessitatibus
            optio quae. Blanditiis dicta ipsum natus provident quos reiciendis repellendus repudiandae tempora
            totam?
         </TextMaskAnimated>
         <div ref={ref} className={cls.paragraph}>
            <TextMaskAnimated margin={'-9%'}>
               The combination of my passion for design, code & interaction positions me in a unique place in
               the web design world.
            </TextMaskAnimated>
            <motion.div style={{ y: valueMove }}>
               <AppButton variant={'round'}>
                  <Link to={getRouteAbout()}>About me</Link>
               </AppButton>
            </motion.div>
         </div>
      </div>
   );
});

HomeAbout.displayName = 'HomeAbout';
export { HomeAbout };
