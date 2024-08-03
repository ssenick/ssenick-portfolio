import type { ReactElement, VideoHTMLAttributes } from 'react';
import { memo, useLayoutEffect, useState } from 'react';

interface AppVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
   className?: string;
   spare?: ReactElement;
   errorSpare?: ReactElement;
}

const AppVideo = memo((props: AppVideoProps) => {
   const { className, src, spare, errorSpare, ...otherProps } = props;
   const [isLoading, setIsLoading] = useState(true);
   const [hasError, setHasError] = useState(false);

   useLayoutEffect(() => {
      if (!src) {
         setHasError(true);
         return;
      }

      const video = document.createElement('video');
      video.src = src;

      const handleLoadedData = () => {
         setIsLoading(false);
         setHasError(false);
      };
      const handleError = () => {
         setIsLoading(false);
         setHasError(true);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      return () => {
         video.removeEventListener('loadeddata', handleLoadedData);
         video.removeEventListener('error', handleError);
      };
   }, [src]);

   if (isLoading && spare) {
      return spare;
   }
   if (errorSpare && hasError) {
      return errorSpare;
   }

   return <video className={className} src={src} {...otherProps} />;
});

AppVideo.displayName = 'AppVideo';
export { AppVideo };
