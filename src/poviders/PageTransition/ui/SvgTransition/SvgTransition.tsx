import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';

import { classNames } from '@/helpers/classNames/classNames';
import { animatePattern } from '@/helpers/func/animatePattern';
import type { Dimensions } from '@/hooks/useDimensions';

import cls from './SvgTransition.module.scss';

interface SvgTransitionProps extends Dimensions {
   className?: string;
}

const SvgTransition = memo((props: SvgTransitionProps) => {
   const { className, width, height } = props;

   const initialPath = useMemo(
      () => `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 300
    `,
      [width, height],
   );
   const targetPath = useMemo(
      () => `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 300
    `,
      [width, height],
   );
   const exitPath = useMemo(
      () => `
        M0 0 
        Q${width / 2} 0 ${width} 0
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 300
    `,
      [width, height],
   );
   const curve = useMemo(
      () => ({
         initial: {
            d: initialPath,
         },
         animate: {
            d: targetPath,
            transition: { duration: 0.75, delay: 0.35, ease: [0.645, 0.045, 0.355, 1] },
         },
         exit: {
            d: exitPath,
            transition: { duration: 0.75, ease: [0.95, 0.05, 0.795, 1] },
         },
      }),
      [initialPath, targetPath, exitPath],
   );

   const slide = useMemo(
      () => ({
         initial: {
            top: '-300px',
         },
         animate: {
            top: '-100vh',
            transition: { duration: 0.75, delay: 0.35, ease: [0.645, 0.045, 0.355, 1] },
            transitionEnd: {
               top: '100vh',
            },
         },
         exit: {
            top: '-300px',
            transition: { duration: 0.75, ease: [0.95, 0.05, 0.795, 1] },
         },
      }),
      [],
   );

   return (
      <motion.svg {...animatePattern(slide)} className={classNames(cls.SvgTransition, {}, [className])}>
         <motion.path {...animatePattern(curve)}></motion.path>
      </motion.svg>
   );
});

SvgTransition.displayName = 'SvgTransition';
export { SvgTransition };
