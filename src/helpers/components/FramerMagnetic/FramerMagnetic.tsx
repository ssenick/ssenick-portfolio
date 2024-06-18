import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

import { useFramerMagnetic } from '@/hooks/useFramerMagnetic';

const FramerMagnetic = (props: PropsWithChildren) => {
   const { children } = props;
   const { linkRef, translateY, translateX, handleMouseLeave, handleMouseMove } =
      useFramerMagnetic<HTMLDivElement>({});

   return (
      <motion.div
         ref={linkRef}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         style={{
            translateX: translateX,
            translateY: translateY,
            cursor: 'pointer',
         }}
      >
         {children}
      </motion.div>
   );
};

FramerMagnetic.displayName = 'FramerMagnetic';
export { FramerMagnetic };
