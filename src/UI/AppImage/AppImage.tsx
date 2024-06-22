import { type ImgHTMLAttributes, memo, type ReactElement, useLayoutEffect, useState } from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
   className?: string;
   spare?: ReactElement;
   errorSpare?: ReactElement;
}

const AppImage = memo((props: AppImageProps) => {
   const { className, src, alt = 'image', spare, errorSpare, ...otherProps } = props;
   const [isLoading, setIsLoading] = useState(true);
   const [hasError, setHasError] = useState(false);

   useLayoutEffect(() => {
      const img = new Image();
      img.src = src ?? '';
      img.onload = () => {
         setIsLoading(false);
      };
      img.onerror = () => {
         setIsLoading(false);
         setHasError(true);
      };
      if (src && !isLoading) {
         setHasError(false);
      }
   }, [src, isLoading]);

   if (isLoading && spare) {
      return spare;
   }
   if (errorSpare && hasError) {
      return errorSpare;
   }

   return <img className={className} src={src} alt={alt} {...otherProps} />;
});

AppImage.displayName = 'AppImage';

export { AppImage };
