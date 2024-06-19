import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { memo, useCallback } from 'react';
import { type Location } from 'react-router-dom';

import { AppRoutes, routeConfig } from '@/config/route/routeConfig';
import { fade, text } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';
import { animatePattern } from '@/helpers/func/animatePattern';
import { useDimensions } from '@/hooks/useDimensions';

import { SvgTransition } from '../SvgTransition/SvgTransition';
import cls from './PageTransition.module.scss';

interface PageTransitionProps {
   className?: string;
   children?: ReactNode;
   location: Location;
}

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
