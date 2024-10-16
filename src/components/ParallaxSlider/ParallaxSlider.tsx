import type { MotionValue } from 'framer-motion';
import { motion, useTransform } from 'framer-motion';
import { memo, useMemo } from 'react';

import ErrorImage from '@/assets/icons/errorImage.svg';
import { AppImage } from '@/components/UI/AppImage/AppImage';
import { AppVideo } from '@/components/UI/AppVideo/AppVideo';
import { classNames } from '@/helpers/classNames/classNames';
import type { parallaxImagesSlider } from '@/types/projectsItems.ts';
import type { VideoGroup } from '@/types/videoGroup.ts';

import cls from './ParallaxSlider.module.scss';

interface ParallaxSliderProps {
   className?: string;
   images?: parallaxImagesSlider;
   videos?: VideoGroup[];
   progress: MotionValue<number>;
   direction?: 'left' | 'right';
   revers?: boolean;
}

const ParallaxSlider = memo((props: ParallaxSliderProps) => {
   const { className, images, videos, progress, direction = 'left', revers } = props;

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
         {images?.map((image, index) => (
            <div key={index} className={cls.image}>
               <AppImage
                  src={image.big}
                  className={cls.img}
                  loading="lazy"
                  spare={image.small}
                  errorSpare={<img src={ErrorImage} className={cls.img} alt="error" />}
               />
            </div>
         ))}
         {!images &&
            videos?.map(({ video, previewImage }, index) => (
               <div key={index} className={cls.image}>
                  {/*<video className={cls.img} src={video} autoPlay muted loop></video>*/}
                  <AppVideo className={cls.img} src={video} spareImage={previewImage} />
               </div>
            ))}
      </motion.div>
   );
});

ParallaxSlider.displayName = 'ParallaxSlider';
export { ParallaxSlider };
