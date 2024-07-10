import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { MouseEvent } from 'react';
import { useCallback, useMemo, useRef } from 'react';

interface ConfigParentEl {
   damping?: number;
   dampen?: number;
   stiffness?: number;
}

interface ConfigChildrenEl {
   dampingChildren?: number;
   dampenChildren?: number;
   stiffnessChildren?: number;
}

interface UseFramerMagneticProps {
   configParentEl?: ConfigParentEl;
   configChildrenEl?: ConfigChildrenEl;
}

export const useFramerMagnetic = <T extends HTMLElement>(props: UseFramerMagneticProps) => {
   // const { damping = 10, dampen = 20, secondDampen = 12, stiffness = 300 } = props;
   const { configParentEl = {}, configChildrenEl = {} } = props;

   const { dampen = 30, stiffness = 300, damping = 18 } = configParentEl;
   const { dampingChildren = 10, dampenChildren = 20, stiffnessChildren = 300 } = configChildrenEl;

   const springConfig = useMemo(
      () => ({
         damping,
         type: 'spring',
         stiffness,
         mass: 0.6,
         bounce: 0.7,
      }),
      [damping, stiffness],
   );

   const springChildrenConfig = useMemo(
      () => ({
         damping: dampingChildren,
         type: 'spring',
         stiffness: stiffnessChildren,
         mass: 0.8,
         bounce: 0.8,
      }),
      [dampingChildren, stiffnessChildren],
   );

   const linkRef = useRef<T | null>(null);
   const mouseX = useMotionValue(0);
   const mouseY = useMotionValue(0);

   const springX = useSpring(mouseX, springConfig);
   const springY = useSpring(mouseY, springConfig);

   const springChildrenX = useSpring(mouseX, springChildrenConfig);
   const springChildrenY = useSpring(mouseY, springChildrenConfig);

   const translateX = useTransform(springX, [-1, 1], [-dampen, dampen]);
   const translateY = useTransform(springY, [-1, 1], [-dampen, dampen]);

   const translateChildrenX = useTransform(springChildrenX, [-1, 1], [-dampenChildren, dampenChildren]);
   const translateChildrenY = useTransform(springChildrenY, [-1, 1], [-dampenChildren, dampenChildren]);

   const handleMouseMove = useCallback(
      (event: MouseEvent) => {
         if (!linkRef.current) return;
         const rect = linkRef.current!.getBoundingClientRect();
         const linkX = rect.left + rect.width / 2;
         const linkY = rect.top + rect.height / 2;
         const offsetX = (event.clientX - linkX) / rect.width;
         const offsetY = (event.clientY - linkY) / rect.height;

         mouseX.set(offsetX);
         mouseY.set(offsetY);
      },
      [mouseX, mouseY],
   );

   const handleMouseLeave = useCallback(() => {
      mouseX.set(0);
      mouseY.set(0);
   }, [mouseX, mouseY]);

   return {
      linkRef,
      translateX,
      translateY,
      translateChildrenX,
      translateChildrenY,
      handleMouseMove,
      handleMouseLeave,
   };
};
