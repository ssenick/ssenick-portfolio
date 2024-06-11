import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { useRef } from 'react';

const FramerMagnetic = (props: PropsWithChildren) => {
   const { children } = props;
   const linkRef = useRef<HTMLDivElement | null>(null);
   const mouseX = useMotionValue(0);
   const mouseY = useMotionValue(0);

   const dampen = 40; // Коэффициент демпфирования для эффекта
   const springConfig = {
      damping: 15,
      type: 'spring',
      stiffness: 300,
      mass: 0.8,
      bounce: 0.5,
   }; // Конфигурация пружины

   const springX = useSpring(mouseX, springConfig);
   const springY = useSpring(mouseY, springConfig);

   const translateX = useTransform(springX, [-1, 1], [-dampen, dampen]);
   const translateY = useTransform(springY, [-1, 1], [-dampen, dampen]);

   const handleMouseMove = (event) => {
      if (!linkRef.current) return;
      const rect = linkRef.current!.getBoundingClientRect();
      const linkX = rect.left + rect.width / 2;
      const linkY = rect.top + rect.height / 2;
      const offsetX = (event.clientX - linkX) / rect.width;
      const offsetY = (event.clientY - linkY) / rect.height;

      mouseX.set(offsetX);
      mouseY.set(offsetY);
   };

   const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
   };

   return (
      <motion.div
         ref={linkRef}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         style={{
            display: 'inline-block',
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
