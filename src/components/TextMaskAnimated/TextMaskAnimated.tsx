import { motion, useInView } from 'framer-motion';
import { memo, useMemo, useRef } from 'react';

import { textMaskAnimation } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';
import { animatePattern } from '@/helpers/func/animatePattern';

import cls from './TextMaskAnimated.module.scss';

type variantSize = 'small' | 'medium' | 'large' | 'regular';

interface TextMaskAnimatedProps {
   className?: string;
   margin?: string;
   once?: boolean;
   children: string;
   size?: variantSize;
}
const TextMaskAnimated = memo((props: TextMaskAnimatedProps) => {
   const { className, margin = '100%', once = true, children, size = 'regular' } = props;
   const splitText = useMemo(() => children.split(''), [children]);

   const containerRef = useRef<HTMLDivElement | null>(null);
   const isInView = useInView(containerRef, { once, margin });

   return (
      <p className={classNames(cls.TextMaskAnimated, {}, [className, cls[size]])} ref={containerRef}>
         {splitText.map((char, index) =>
            char === ' ' ? (
               ' '
            ) : (
               <span key={index + char} className={cls.letter}>
                  <motion.span
                     custom={index}
                     {...animatePattern(textMaskAnimation)}
                     animate={isInView ? 'animate' : ''}
                  >
                     {char}
                  </motion.span>
               </span>
            ),
         )}
      </p>
   );
});

TextMaskAnimated.displayName = 'TextMaskAnimated';
export { TextMaskAnimated };
