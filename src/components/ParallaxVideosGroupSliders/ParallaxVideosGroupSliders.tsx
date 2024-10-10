import { useScroll } from 'framer-motion';
import { memo } from 'react';

import { ParallaxSlider } from '@/components/ParallaxSlider/ParallaxSlider.tsx';
import { classNames } from '@/helpers/classNames/classNames';
import type { VideoGroup } from '@/types/videoGroup.ts';

import cls from './ParallaxVideosGroupSliders.module.scss';

interface ParallaxVideosGroupSlidersProps {
   className?: string;
   groupOne: VideoGroup[];
   groupTwo: VideoGroup[];
}

const ParallaxVideosGroupSliders = memo((props: ParallaxVideosGroupSlidersProps) => {
   const { className, groupOne, groupTwo } = props;
   const { scrollYProgress } = useScroll({
      offset: ['start end', 'end start'],
   });
   return (
      <div className={classNames(cls.ParallaxVideosGroupSliders, {}, [className])}>
         <ParallaxSlider videos={groupOne} progress={scrollYProgress} />
         <ParallaxSlider revers={true} videos={groupTwo} progress={scrollYProgress} direction={'right'} />
      </div>
   );
});

ParallaxVideosGroupSliders.displayName = 'ParallaxVideosGroupSliders';
export { ParallaxVideosGroupSliders };
