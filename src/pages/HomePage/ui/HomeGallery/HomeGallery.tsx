import { memo } from 'react';

import VideoBlog from '@/assets/videos/blog.mp4';
import VideoEurotex from '@/assets/videos/eurotex.mp4';
import VideoGart from '@/assets/videos/gart.mp4';
import VideoGreenShop from '@/assets/videos/greenshop.mp4';
import VideoHelp from '@/assets/videos/help.mp4';
import VideoPortfolio from '@/assets/videos/portfolio.mp4';
import VideoSportbet from '@/assets/videos/sportbet.mp4';
import VideoStatika from '@/assets/videos/statika.mp4';
import { ParallaxVideosGroupSliders } from '@/components/ParallaxVideosGroupSliders/ParallaxVideosGroupSliders.tsx';

interface HomeGalleryProps {
   className?: string;
}

const video1: [string, string, string, string] = [VideoEurotex, VideoSportbet, VideoPortfolio, VideoStatika];
const video2: [string, string, string, string] = [VideoGart, VideoBlog, VideoHelp, VideoGreenShop];

const HomeGallery = memo((props: HomeGalleryProps) => {
   const { className } = props;
   return <ParallaxVideosGroupSliders className={className} videosOne={video1} videosTwo={video2} />;
});

HomeGallery.displayName = 'HomeGallery';
export { HomeGallery };
