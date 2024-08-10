import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';

import { scale } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';
import { animatePattern } from '@/helpers/func/animatePattern';
import { useFramerMagnetic } from '@/hooks/useFramerMagnetic';

import cls from './AppButton.module.scss';

type ButtonVariant = 'clear' | 'burger' | 'menu' | 'link' | 'round';

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   variant?: ButtonVariant;
   btnActive?: boolean;
   oppositeColor?: boolean;
   link?: boolean;
   linkHref?: string;
}
const AppButton = (props: AppButtonProps) => {
   const {
      className,
      btnActive,
      variant = 'clear',
      oppositeColor,
      link,
      linkHref,
      children,
      ...otherProps
   } = props;
   const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
   const [isHovered, setIsHovered] = useState(false);
   const [isHiding, setIsHiding] = useState(false);
   const {
      linkRef,
      translateY,
      translateX,
      translateChildrenX,
      translateChildrenY,
      handleMouseLeave,
      handleMouseMove,
   } = useFramerMagnetic<HTMLDivElement>({
      configChildrenEl: { dampingChildren: 30, stiffnessChildren: 350, dampenChildren: 30 },
   });

   const handleMouseEnter = () => {
      if (timer.current) {
         clearTimeout(timer.current!);
      }
      setIsHovered(true);
      setIsHiding(false);
   };

   const handleMouseLeaveWithState = () => {
      setIsHovered(false);
      setIsHiding(true);
      handleMouseLeave();
      timer.current = window.setTimeout(() => {
         setIsHiding(false);
      }, 500);
   };

   useEffect(() => {
      return () => {
         if (timer.current) {
            clearTimeout(timer.current!);
         }
      };
   }, []);

   const buttonContent = useMemo(
      () => (
         <motion.div
            className={classNames(cls.Button, { [cls.show]: isHovered, [cls.hidden]: isHiding }, [])}
            ref={linkRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...(variant === 'burger' ? animatePattern(scale) : {})}
            style={{
               translateX: translateX,
               translateY: translateY,
               cursor: 'pointer',
            }}
         >
            <motion.div
               className={classNames(cls.children, {}, [])}
               ref={linkRef}
               onMouseMove={handleMouseMove}
               onMouseLeave={handleMouseLeave}
               style={{
                  translateX: translateChildrenX,
                  translateY: translateChildrenY,
               }}
            >
               {children}
               {variant === 'burger' ? <div className={cls.burger} /> : null}
            </motion.div>
         </motion.div>
      ),
      [
         children,
         handleMouseLeave,
         handleMouseMove,
         isHiding,
         isHovered,
         linkRef,
         translateChildrenX,
         translateChildrenY,
         translateX,
         translateY,
         variant,
      ],
   );

   if (link) {
      return (
         <a
            href={linkHref ? linkHref : ''}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeaveWithState}
            className={classNames(
               cls.AppButton,
               {
                  [cls.active]: btnActive,
                  [cls.oppositeColor]: oppositeColor,
               },
               [className, cls[variant]],
            )}
            {...otherProps}
         >
            {buttonContent}
         </a>
      );
   }

   return (
      <button
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeaveWithState}
         className={classNames(
            cls.AppButton,
            {
               [cls.active]: btnActive,
               [cls.oppositeColor]: oppositeColor,
            },
            [className, cls[variant]],
         )}
         {...otherProps}
      >
         {buttonContent}
      </button>
   );
};

AppButton.displayName = 'AppButton';
export { AppButton };
