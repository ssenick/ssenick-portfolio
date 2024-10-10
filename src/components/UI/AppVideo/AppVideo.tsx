import type { ReactElement, VideoHTMLAttributes } from 'react';
import { useEffect } from 'react';
import { memo, useState } from 'react';

import ErrorImage from '@/assets/icons/errorImage.svg';
interface AppVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
   className?: string;
   spareImage?: string;
   errorSpare?: ReactElement;
}

const AppVideo = memo((props: AppVideoProps) => {
   const { className, src, spareImage, errorSpare, ...otherProps } = props;
   const [status, setStatus] = useState<'loading' | 'error' | 'loaded'>('loading');

   useEffect(() => {
      if (!src) {
         setStatus('error');
         return;
      }

      const video = document.createElement('video');
      video.src = src;

      const handleLoadedData = () => {
         setStatus('loaded');
      };

      const handleError = () => {
         setStatus('error');
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      return () => {
         video.removeEventListener('loadeddata', handleLoadedData);
         video.removeEventListener('error', handleError);
      };
   }, [src]);

   if (status === 'loading' && spareImage) {
      return <img className={className} src={spareImage} alt={`${spareImage} preview`} />;
   }
   if (status === 'error' && errorSpare) {
      return errorSpare;
   } else if (status === 'error' && !errorSpare) {
      return <img className={className} src={ErrorImage} alt={`error preview`} />;
   }

   return <video className={className} src={src} {...otherProps} />;
});

AppVideo.displayName = 'AppVideo';
export { AppVideo };
