import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { memo, useCallback } from 'react';
import { type Location } from 'react-router-dom';

import { animatePattern } from '@/app/povaiders/PageTransition/helpers/animatePattern';
import { SvgTransition } from '@/app/povaiders/PageTransition/ui/SvgTransition/SvgTransition';
import { AppRoutes, routeConfig } from '@/config/route/routeConfig';
import { classNames } from '@/helpers/classNames/classNames';
import { useDimensions } from '@/hooks/useDimensions';

import cls from './PageTransition.module.scss';

interface PageTransitionProps {
   className?: string;
   children?: ReactNode;
   location: Location;
}

const text = {
   initial: {
      opacity: 1,
   },
   animate: {
      opacity: 0,
      top: 0,
      transition: { duration: 0.75, delay: 0.35, ease: [0.645, 0.045, 0.355, 1] },
      transitionEnd: { top: '50%', opacity: 0 },
   },
   exit: {
      opacity: 0,
      top: '50%',
      transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
   },
};

const fade = {
   initial: {
      opacity: 0,
   },
   animate: {
      opacity: 1,
      transition: { duration: 0.3, delay: 0.1 },
   },
};

const PageTransition = memo((props: PageTransitionProps) => {
   const { className, children, location } = props;
   const { width, height } = useDimensions();

   const getPageName = useCallback((path: string) => {
      return Object.values(AppRoutes).find((route) => routeConfig[route]?.path === path);
   }, []);

   return (
      <AnimatePresence mode="wait">
         <motion.div key={location.pathname} className={classNames(cls.PageTransition, {}, [className])}>
            {children}
            <motion.p {...animatePattern(text)} className={cls.pathname}>
               <motion.span {...animatePattern(fade)}>{getPageName(location.pathname)}</motion.span>
            </motion.p>
            <div className={cls.background} style={{ opacity: width > 0 ? 0 : 1 }}></div>
            {width > 0 && <SvgTransition width={width} height={height} />}
         </motion.div>
      </AnimatePresence>
   );
});

PageTransition.displayName = 'PageTransition';
export { PageTransition };
