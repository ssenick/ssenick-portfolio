import { useScroll } from 'framer-motion';
import { memo, useRef } from 'react';

import ImageBlog from '@/assets/projects/blog/blog2.mp4';
import ImageEurotex from '@/assets/projects/eurotex/eurotex2.mp4';
import ImageGart from '@/assets/projects/gart/gart2.mp4';
import ImageGreenShop from '@/assets/projects/greenshop/greenshop2.mp4';
import ImageHelp from '@/assets/projects/help/help2.mp4';
import ImagePortfolio from '@/assets/projects/portfolio/portfolio2.mp4';
import ImageSportbet from '@/assets/projects/sportbet/sportbet2.mp4';
import ImageStatika from '@/assets/projects/statika/statika2.mp4';
import { ParallaxSlider } from '@/components/ParallaxSlider/ParallaxSlider';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './HomeGallery.module.scss';

interface HomeGalleryProps {
   className?: string;
}

const video1 = [ImageEurotex, ImageSportbet, ImagePortfolio, ImageStatika];
const video2 = [ImageGart, ImageBlog, ImageHelp, ImageGreenShop];

const HomeGallery = memo((props: HomeGalleryProps) => {
   const { className } = props;
   const ref = useRef<HTMLDivElement | null>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start'],
   });
   return (
      <div className={classNames(cls.HomeGallery, {}, [className])}>
         <ParallaxSlider videos={video1} progress={scrollYProgress} />
         <ParallaxSlider revers={true} videos={video2} progress={scrollYProgress} direction={'right'} />
      </div>
   );
});

HomeGallery.displayName = 'HomeGallery';
export { HomeGallery };
