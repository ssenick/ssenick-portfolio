import type { Variants } from 'framer-motion';
export const animatePattern = (variants: Variants) => {
   return {
      initial: 'initial',
      animate: 'animate',
      exit: 'exit',
      variants,
   };
};
