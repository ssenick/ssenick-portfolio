import { motion } from 'framer-motion';
import { useMemo } from 'react';

import { animatePattern } from '@/helpers/func/animatePattern';
import { useBrowserInfo } from '@/hooks/useBrowserInfo';
import { useDimensions } from '@/hooks/useDimensions';

import cls from './Curve.module.scss';

const curveSafari = {
   initial: {
      x: 0,
      scaleY: 1,
   },

   animate: {
      x: 100,
      scaleY: 2.5,

      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
   },

   exit: {
      x: 0,
      scaleY: 1,

      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
   },
};

const Curve = () => {
   const browserInfo = useBrowserInfo();
   const { height } = useDimensions();

   const initialPath = useMemo(() => `M100 0 L100 ${height} Q-100 ${height / 2} 100 0`, [height]);

   const targetPath = useMemo(() => `M100 0 L100 ${height} Q100 ${height / 2} 100 0`, [height]);

   const curve = useMemo(
      () => ({
         initial: {
            d: initialPath,
         },

         animate: {
            d: targetPath,

            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
         },

         exit: {
            d: initialPath,

            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
         },
      }),
      [initialPath, targetPath],
   );

   if (browserInfo?.name === 'Safari') {
      return (
         <motion.svg {...animatePattern(curveSafari)} className={cls.CurveSafari}>
            <path d={initialPath}></path>
         </motion.svg>
      );
   }

   return (
      <svg className={cls.Curve}>
         <motion.path {...animatePattern(curve)}></motion.path>
      </svg>
   );
};

Curve.displayName = 'Curve';
export { Curve };
