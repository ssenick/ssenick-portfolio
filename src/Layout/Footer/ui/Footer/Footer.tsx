import { motion, useScroll, useTransform } from 'framer-motion';
import { memo, useRef } from 'react';
import { Link } from 'react-router-dom';

import Arrow from '@/assets/arrow.svg?react';
import { Socials } from '@/components/Socials/Socials';
import { getRouteAbout } from '@/config/route/routeConfig';
import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';
import { AppButton } from '@/UI/AppButton/AppButton';
import { Title } from '@/UI/Title/Title';

import cls from './Footer.module.scss';

interface FooterProps {
   className?: string;
}

const Footer = memo((props: FooterProps) => {
   const { className } = props;
   const ref = useRef<HTMLDivElement | null>(null);

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end end'],
   });
   const valueHeight = useTransform(scrollYProgress, [0, 1], [1, 0]);
   const valueMove = useTransform(scrollYProgress, [0, 1], ['-30%', '0%']);

   // useMotionValueEvent(scrollYProgress, 'change', (latest) => {
   //    console.log('x changed to', latest);
   //    console.log(valueHeight);
   // });
   //
   return (
      <div ref={ref} className={classNames(cls.Footer, {}, [className])}>
         <motion.div className={cls.roundWrapper} style={{ scaleY: valueHeight }}>
            <div className={cls.round}></div>
         </motion.div>
         <motion.div style={{ y: valueMove }}>
            <div className={cls.quickContact}>
               <Title className={cls.title}>Need a frontend developer?</Title>
               <FramerMagnetic>
                  <Link to={getRouteAbout()} className={cls.linkAbout}>
                     Let’s work together <Arrow className={cls.arrow} />
                  </Link>
               </FramerMagnetic>
            </div>
            <div className={cls.information}>
               <Title>Contact information: </Title>
               <p className={cls.description}>
                  Feel free to contact me anytime. I prefer to communicate via email or social networks,
                  especially since we can be located in several time zones.
               </p>
            </div>
            <div className={cls.buttons}>
               <AppButton className={cls.button} oppositeColor variant="link">
                  <a href="tel:+14037085691">+1 403 708 5691</a>
               </AppButton>
               <AppButton className={cls.button} oppositeColor variant="link">
                  <a href="mailto:ssenick@ukr.net">ssenick@ukr.net</a>
               </AppButton>
            </div>
            <div className={cls.wrapper}>
               <div>
                  <Title>Version</Title>
                  <p>2024 © Edition</p>
               </div>
               <div>
                  <Socials />
               </div>
            </div>
         </motion.div>
      </div>
   );
});

Footer.displayName = 'Footer';
export { Footer };
