import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

import { useFramerMagnetic } from '@/hooks/useFramerMagnetic';

interface FramerMagneticProps extends PropsWithChildren {
   className?: string;
}

const FramerMagnetic = (props: FramerMagneticProps) => {
   const { children, className } = props;
   const { linkRef, translateY, translateX, handleMouseLeave, handleMouseMove } =
      useFramerMagnetic<HTMLDivElement>({});

   return (
      <motion.div
         className={className}
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
