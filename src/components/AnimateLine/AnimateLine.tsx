import type { MouseEvent } from 'react';
import { useCallback } from 'react';
import { memo, useEffect, useRef } from 'react';

import { classNames } from '@/helpers/classNames/classNames';

import cls from './AnimateLine.module.scss';

interface AnimateLineProps {
   className?: string;
}

const AnimateLine = memo((props: AnimateLineProps) => {
   const { className } = props;
   const path = useRef<SVGPathElement | null>(null);
   const progressRef = useRef(0);
   let x = 0.5;
   let time: number = Math.PI / 2;
   const reqIdRef = useRef<number | null>(null);

   const setPath = useCallback(
      (progress: number) => {
         const container = path.current?.parentElement;
         if (container) {
            const style = window.getComputedStyle(container);
            const padding = parseFloat(style.paddingLeft);
            const width = container.clientWidth - padding * 2;
            if (path.current) {
               path.current.setAttributeNS(null, 'd', `M0 100 Q${width * x} ${100 + progress}, ${width} 100`);
            }
         }
      },
      [x],
   );

   useEffect(() => {
      setPath(progressRef.current);
   }, [setPath]);

   const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

   const manageMouseEnter = () => {
      if (reqIdRef.current) {
         cancelAnimationFrame(reqIdRef.current);
         resetAnimation();
      }
   };

   const manageMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const { movementY, clientX } = e;
      if (path.current) {
         const pathBound = path.current.getBoundingClientRect();
         x = (clientX - pathBound.left) / pathBound.width;
         progressRef.current += movementY;
         setPath(progressRef.current);
      }
   };

   const manageMouseLeave = () => {
      animateOut();
   };

   const animateOut = () => {
      const newProgress = progressRef.current * Math.sin(time);
      progressRef.current = lerp(progressRef.current, 0, 0.025);
      time += 0.2;
      setPath(newProgress);
      if (Math.abs(progressRef.current) > 0.75) {
         reqIdRef.current = requestAnimationFrame(animateOut);
      } else {
         resetAnimation();
      }
   };

   const resetAnimation = () => {
      time = Math.PI / 2;
      progressRef.current = 0;
   };
   return (
      <div className={classNames(cls.AnimateLine, {}, [className])}>
         <div
            onMouseEnter={() => manageMouseEnter()}
            onMouseMove={(e) => manageMouseMove(e)}
            onMouseLeave={() => manageMouseLeave()}
            className={cls.box}
         ></div>
         <svg>
            <path ref={path}></path>
         </svg>
      </div>
   );
});

AnimateLine.displayName = 'AnimateLine';
export { AnimateLine };
