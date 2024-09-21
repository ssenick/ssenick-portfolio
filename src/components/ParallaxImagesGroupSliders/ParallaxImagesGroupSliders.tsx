import { useScroll } from 'framer-motion';
import { memo } from 'react';

import { ParallaxSlider } from '@/components/ParallaxSlider/ParallaxSlider.tsx';
import { classNames } from '@/helpers/classNames/classNames';
import type { parallaxImages, parallaxImagesSlider } from '@/types/projectsItems.ts';

import cls from './ParallaxImagesGroupSliders.module.scss';

interface ParallaxImagesGroupSlidersProps {
   className?: string;
   sliders: parallaxImages;
}

const ParallaxImagesGroupSliders = memo((props: ParallaxImagesGroupSlidersProps) => {
   const { className, sliders } = props;

   const { scrollYProgress } = useScroll({
      offset: ['start end', 'end start'],
   });

   const firstSlider = sliders.slice(0, 4) as parallaxImagesSlider;
   const secondSlider = sliders.slice(4, 8) as parallaxImagesSlider;

   return (
      <div className={classNames(cls.ParallaxImagesGroupSliders, {}, [className])}>
         <ParallaxSlider images={firstSlider} progress={scrollYProgress} />
         <ParallaxSlider revers={true} images={secondSlider} progress={scrollYProgress} direction={'right'} />
      </div>
   );
});

ParallaxImagesGroupSliders.displayName = 'ParallaxImagesGroupSliders';
export { ParallaxImagesGroupSliders };
