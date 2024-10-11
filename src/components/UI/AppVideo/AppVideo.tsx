import type { ReactElement, VideoHTMLAttributes } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { memo } from 'react';

import ErrorImage from '@/assets/icons/errorImage.svg';
import { useBrowserInfo } from '@/hooks/useBrowserInfo.ts';

interface AppVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
   className?: string;
   spareImage?: string;
   errorSpare?: ReactElement;
}

const AppVideo = memo((props: AppVideoProps) => {
   const { className, src, spareImage, errorSpare } = props;
   const [status, setStatus] = useState<'loading' | 'error' | 'loaded'>('loading');
   const videoRef = useRef<HTMLVideoElement | null>(null);
   const browser = useBrowserInfo();

   const handleLoadedMetadata = useCallback(() => {
      setStatus('loaded');
      if (videoRef.current) {
         videoRef.current.play().catch(() => {
            setStatus('error');
         });
      }
   }, []);

   const handleError = useCallback(() => {
      setStatus('error');
   }, []);

   useEffect(() => {
      if (!src) {
         setStatus('error');
         return;
      }
      const video = videoRef.current;

      if (video) {
         video.addEventListener('loadedmetadata', handleLoadedMetadata);
         video.addEventListener('error', handleError);

         return () => {
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('error', handleError);
         };
      }
   }, [src, handleLoadedMetadata, handleError]);

   if (status === 'error' && errorSpare) {
      return errorSpare;
   } else if (status === 'error' && !errorSpare) {
      return <img className={className} src={ErrorImage} alt="error preview" />;
   }

   return (
      <>
         {status === 'loading' && spareImage && (
            <img className={className} src={spareImage} alt="preview image" />
         )}
         <video
            ref={videoRef}
            className={className}
            src={src}
            poster={spareImage}
            preload="auto"
            playsInline
            muted
            loop={browser?.name !== 'Safari'}
         />
      </>
   );
});

AppVideo.displayName = 'AppVideo';
export { AppVideo };
