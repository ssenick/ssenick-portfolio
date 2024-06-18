import { motion } from 'framer-motion';

import { animatePattern } from '@/app/poviders/PageTransition/helpers/animatePattern';

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

const Curve = () => {
   return (
      <svg className={cls.Curve}>
         <motion.path {...animatePattern(curve)}></motion.path>
      </svg>
   );
};

Curve.displayName = 'Curve';
export { Curve };
