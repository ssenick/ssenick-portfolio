import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes } from 'react';

import { scale } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';
import { animatePattern } from '@/helpers/func/animatePattern';
import { useFramerMagnetic } from '@/hooks/useFramerMagnetic';

import cls from './AppButton.module.scss';

type ButtonVariant = 'clear' | 'burger' | 'menu' | 'link';

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   variant?: ButtonVariant;
   btnActive?: boolean;
   oppositeColor?: boolean;
}
const AppButton = (props: AppButtonProps) => {
   const { className, btnActive, variant = 'clear', oppositeColor, children, ...otherProps } = props;
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

   return (
      <button
         className={classNames(
            cls.AppButton,
            { [cls.active]: btnActive, [cls.oppositeColor]: oppositeColor },
            [className, cls[variant]],
         )}
         {...otherProps}
      >
         <motion.div
            className={cls.Button}
            ref={linkRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...animatePattern(scale)}
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
               {variant === 'burger' && <div className={cls.burger} />}
            </motion.div>
         </motion.div>
      </button>
   );
};

AppButton.displayName = 'AppButton';
export { AppButton };
