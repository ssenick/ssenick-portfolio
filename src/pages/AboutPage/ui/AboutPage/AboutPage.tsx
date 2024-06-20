import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import type { ButtonHTMLAttributes } from 'react';
import { useRef } from 'react';

import { useTheme } from '@/app/poviders/ThemeProvider';
import { classNames } from '@/helpers/classNames/classNames';
import { useFramerMagnetic } from '@/hooks/useFramerMagnetic';

import cls from './AboutPage.module.scss';

interface AboutPageProps {
   className?: string;
}

const Button = ({ children, ...otherProps }: ButtonHTMLAttributes<HTMLButtonElement>) => {
   const {
      linkRef,
      translateY,
      translateX,
      translateChildrenX,
      translateChildrenY,
      handleMouseLeave,
      handleMouseMove,
   } = useFramerMagnetic<HTMLDivElement>({
      configChildrenEl: { dampingChildren: 40, stiffnessChildren: 300, dampenChildren: 50 },
   });

   return (
      <button style={{ color: '#fff' }} {...otherProps}>
         <motion.div
            ref={linkRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               width: '200px',
               height: '200px',
               backgroundColor: '#000',
               borderRadius: '50%',
               translateX: translateX,
               translateY: translateY,
               cursor: 'pointer',
            }}
         >
            <motion.div
               ref={linkRef}
               onMouseMove={handleMouseMove}
               onMouseLeave={handleMouseLeave}
               style={{
                  display: 'inline-block',
                  translateX: translateChildrenX,
                  translateY: translateChildrenY,
                  cursor: 'pointer',
                  color: '#fff',
               }}
            >
               {children}
            </motion.div>
         </motion.div>
      </button>
   );
};
const AboutPage = (props: AboutPageProps) => {
   const { className } = props;
   const { toggleTheme } = useTheme();
   const ref = useRef<HTMLDivElement | null>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end end'],
   });
   useMotionValueEvent(scrollYProgress, 'change', (latest) => {
      console.log(latest, 'about');
   });

   return (
      <div className={classNames(cls.AboutPage, {}, [className])}>
         <h1>ABOUT</h1>
         <Button onClick={() => toggleTheme()}>
            <span>BUTTON</span>
         </Button>
         <div style={{ height: '200vh' }}></div>
         <motion.div
            ref={ref}
            style={{ height: '400px', width: '100%', backgroundColor: '#000' }}
         ></motion.div>
         <div style={{ height: '200vh' }}></div>
      </div>
   );
};

AboutPage.displayName = 'AboutPage';
export default AboutPage;
