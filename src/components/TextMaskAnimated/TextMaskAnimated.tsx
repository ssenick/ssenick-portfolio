import { motion, useInView } from 'framer-motion';
import { memo, useMemo, useRef } from 'react';

import { textMaskAnimation } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './TextMaskAnimated.module.scss';

type variantSize = 'smallSize' | 'mediumSize' | 'largeSize' | 'regularSize';
type variantFontWeight = 'normal' | 'medium' | 'bold' | 'black';

interface TextMaskAnimatedProps {
   className?: string;
   margin?: string;
   once?: boolean;
   children: string;
   size?: variantSize;
   fontWeight?: variantFontWeight;
}

const TextMaskAnimated = memo((props: TextMaskAnimatedProps) => {
   const {
      className,
      margin = '0px',
      once = true,
      children,
      size = 'regular',
      fontWeight = 'normal',
   } = props;

   const splitText = useMemo(() => children.split(' '), [children]);

   const containerRef = useRef<HTMLDivElement | null>(null);

   const isInView = useInView(containerRef, { once, margin });

   return (
      <p
         className={classNames(cls.TextMaskAnimated, {}, [className, cls[size], cls[fontWeight]])}
         ref={containerRef}
      >
         {splitText.map((char, index) => (
            <span key={index + char} className={cls.letter}>
               <motion.span
                  custom={index}
                  variants={textMaskAnimation}
                  animate={isInView ? 'animate' : 'initial'}
               >
                  &nbsp;{char}
               </motion.span>
            </span>
         ))}
      </p>
   );
});

TextMaskAnimated.displayName = 'TextMaskAnimated';
export { TextMaskAnimated };
