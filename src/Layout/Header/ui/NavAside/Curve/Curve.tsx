import { motion } from 'framer-motion';

import { animatePattern } from '@/helpers/func/animatePattern';
import { useBrowserInfo } from '@/hooks/useBrowserInfo';

import cls from './Curve.module.scss';

const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;

const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

const curve = {
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
};
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
