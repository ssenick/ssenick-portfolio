import { useScroll } from 'framer-motion';
import { memo } from 'react';

import { ParallaxSlider } from '@/components/ParallaxSlider/ParallaxSlider.tsx';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './ParallaxVideosGroupSliders.module.scss';

interface ParallaxVideosGroupSlidersProps {
   className?: string;
   videosOne: [string, string, string, string];
   videosTwo: [string, string, string, string];
}

const ParallaxVideosGroupSliders = memo((props: ParallaxVideosGroupSlidersProps) => {
   const { className, videosOne, videosTwo } = props;
   const { scrollYProgress } = useScroll({
      offset: ['start end', 'end start'],
   });
   return (
      <div className={classNames(cls.ParallaxVideosGroupSliders, {}, [className])}>
         <ParallaxSlider videos={videosOne} progress={scrollYProgress} />
         <ParallaxSlider revers={true} videos={videosTwo} progress={scrollYProgress} direction={'right'} />
      </div>
   );
});

ParallaxVideosGroupSliders.displayName = 'ParallaxVideosGroupSliders';
export { ParallaxVideosGroupSliders };
