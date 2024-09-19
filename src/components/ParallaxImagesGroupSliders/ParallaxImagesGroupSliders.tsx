import { useScroll } from 'framer-motion';
import { memo } from 'react';

import { ParallaxSlider } from '@/components/ParallaxSlider/ParallaxSlider.tsx';
import { classNames } from '@/helpers/classNames/classNames';
import type { projectsSlidersImages } from '@/types/projectsItems.ts';

import cls from './ParallaxImagesGroupSliders.module.scss';

interface ParallaxImagesGroupSlidersProps {
   className?: string;
   slidersImages: projectsSlidersImages;
}

const ParallaxImagesGroupSliders = memo((props: ParallaxImagesGroupSlidersProps) => {
   const { className, slidersImages } = props;

   const { scrollYProgress } = useScroll({
      offset: ['start end', 'end start'],
   });

   return (
      <div className={classNames(cls.ParallaxImagesGroupSliders, {}, [className])}>
         <ParallaxSlider images={slidersImages?.first} progress={scrollYProgress} />
         <ParallaxSlider
            revers={true}
            images={slidersImages?.second}
            progress={scrollYProgress}
            direction={'right'}
         />
      </div>
   );
});

ParallaxImagesGroupSliders.displayName = 'ParallaxImagesGroupSliders';
export { ParallaxImagesGroupSliders };
