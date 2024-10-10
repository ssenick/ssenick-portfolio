import { memo } from 'react';

import VideoBlog from '@/assets/videos/blog.mp4';
import ImageBlog from '@/assets/videos/blog.webp';
import VideoEurotex from '@/assets/videos/eurotex.mp4';
import ImageEurotex from '@/assets/videos/eurotex.webp';
import VideoGart from '@/assets/videos/gart.mp4';
import ImageGart from '@/assets/videos/gart.webp';
import VideoGreenShop from '@/assets/videos/greenshop.mp4';
import ImageGreenShop from '@/assets/videos/greenshop.webp';
import VideoHelp from '@/assets/videos/help.mp4';
import ImageHelp from '@/assets/videos/help.webp';
import VideoPortfolio from '@/assets/videos/portfolio.mp4';
import ImagePortfolio from '@/assets/videos/portfolio.webp';
import VideoSportbet from '@/assets/videos/sportbet.mp4';
import ImageSportbet from '@/assets/videos/sportbet.webp';
import VideoStatika from '@/assets/videos/statika.mp4';
import ImageStatika from '@/assets/videos/statika.webp';
import { ParallaxVideosGroupSliders } from '@/components/ParallaxVideosGroupSliders/ParallaxVideosGroupSliders.tsx';
import type { VideoGroup } from '@/types/videoGroup.ts';

interface HomeGalleryProps {
   className?: string;
}

const videoGroupOne: VideoGroup[] = [
   { video: VideoEurotex, previewImage: ImageEurotex },
   { video: VideoSportbet, previewImage: ImageSportbet },
   { video: VideoPortfolio, previewImage: ImagePortfolio },
   { video: VideoStatika, previewImage: ImageStatika },
];
const videoGroupTwo: VideoGroup[] = [
   { video: VideoGart, previewImage: ImageGart },
   { video: VideoBlog, previewImage: ImageBlog },
   { video: VideoHelp, previewImage: ImageHelp },
   { video: VideoGreenShop, previewImage: ImageGreenShop },
];
const HomeGallery = memo((props: HomeGalleryProps) => {
   const { className } = props;
   return (
      <ParallaxVideosGroupSliders className={className} groupOne={videoGroupOne} groupTwo={videoGroupTwo} />
   );
});

HomeGallery.displayName = 'HomeGallery';
export { HomeGallery };
