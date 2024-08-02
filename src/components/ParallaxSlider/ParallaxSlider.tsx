import type { MotionValue } from 'framer-motion';
import { motion, useTransform } from 'framer-motion';
import { memo, useMemo } from 'react';

import { AppImage } from '@/components/UI/AppImage/AppImage';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './ParallaxSlider.module.scss';
interface ParallaxSliderProps {
   className?: string;
   images: string[];
   progress: MotionValue<number>;
   direction?: 'left' | 'right';
   revers?: boolean;
}

const ParallaxSlider = memo((props: ParallaxSliderProps) => {
   const { className, images, progress, direction = 'left', revers } = props;

   const handlerDirection = useMemo(() => (direction === 'left' ? -1 : 1), [direction]);
   const translateX = useTransform(
      progress,
      [0, 1],
      [`${5 * handlerDirection}vw`, `${-7 * handlerDirection}vw`],
   );

   return (
      <motion.div
         className={classNames(cls.ParallaxSlider, { [cls.revers]: revers }, [className])}
         style={{ x: translateX }}
      >
         {images.map((image) => (
            <div key={image} className={cls.image}>
               <AppImage src={image} className={cls.img} />
            </div>
         ))}
         {/*{images.map((image) => (*/}
         {/*   <div key={image} className={cls.image}>*/}
         {/*      <video src={image} autoPlay className={cls.img} playsInline muted loop></video>*/}
         {/*   </div>*/}
         {/*))}*/}
      </motion.div>
   );
});

ParallaxSlider.displayName = 'ParallaxSlider';
export { ParallaxSlider };
