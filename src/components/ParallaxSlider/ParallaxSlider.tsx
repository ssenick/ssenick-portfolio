import type { MotionValue } from 'framer-motion';
import { motion, useTransform } from 'framer-motion';
import { memo, useMemo } from 'react';

import ErrorImage from '@/assets/errorImage.svg';
import { AppImage } from '@/components/UI/AppImage/AppImage';
import { AppVideo } from '@/components/UI/AppVideo/AppVideo';
import { classNames } from '@/helpers/classNames/classNames';
import { useBrowserInfo } from '@/hooks/useBrowserInfo';

import cls from './ParallaxSlider.module.scss';
interface ParallaxSliderProps {
   className?: string;
   images?: string[];
   videos?: string[];
   progress: MotionValue<number>;
   direction?: 'left' | 'right';
   revers?: boolean;
}

const ParallaxSlider = memo((props: ParallaxSliderProps) => {
   const { className, images, videos, progress, direction = 'left', revers } = props;
   const browser = useBrowserInfo();
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
         {images?.map((image) => (
            <div key={image} className={cls.image}>
               <AppImage src={image} className={cls.img} />
            </div>
         ))}
         {!images &&
            videos?.map((video) => (
               <div key={video} className={cls.image}>
                  {/*<video className={cls.img} src={video} autoPlay muted loop></video>*/}
                  <AppVideo
                     className={cls.img}
                     src={video}
                     spare={<div className={cls.spare}></div>}
                     errorSpare={<img src={ErrorImage} className={cls.img} alt="error" />}
                     autoPlay
                     playsInline
                     muted
                     loop={browser?.name !== 'Safari'}
                     preload="auto"
                  />
               </div>
            ))}
      </motion.div>
   );
});

ParallaxSlider.displayName = 'ParallaxSlider';
export { ParallaxSlider };
