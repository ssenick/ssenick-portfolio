import { memo } from 'react';

import VideoBlog from '@/assets/projects/blog/video/video.mp4';
import VideoEurotex from '@/assets/projects/eurotex/video/video.mp4';
import VideoGart from '@/assets/projects/gart/video/video.mp4';
import VideoGreenShop from '@/assets/projects/greenshop/video/video.mp4';
import VideoHelp from '@/assets/projects/help/video/video.mp4';
import VideoPortfolio from '@/assets/projects/portfolio/video/video.mp4';
import VideoSportbet from '@/assets/projects/sportbet/video/video.mp4';
import VideoStatika from '@/assets/projects/statika/video/video.mp4';
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
