import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes } from 'react';

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
   return (
      <div className={classNames(cls.AboutPage, {}, [className])}>
         <h1>ABOUT</h1>
         <Button onClick={() => toggleTheme()}>
            <span>BUTTON</span>
         </Button>
         <div style={{ width: '100%', height: '400px', backgroundColor: '#000' }}></div>
         <div style={{ width: '100%', height: '400px', backgroundColor: '#000' }}></div>
         <div style={{ width: '100%', height: '400px', backgroundColor: '#000' }}></div>
         <div style={{ width: '100%', height: '400px', backgroundColor: '#000' }}></div>
         <div style={{ width: '100%', height: '400px', backgroundColor: '#000' }}></div>
      </div>
   );
};

AboutPage.displayName = 'AboutPage';
export default AboutPage;
