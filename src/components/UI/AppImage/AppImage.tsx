import { type ImgHTMLAttributes, memo, type ReactElement, useEffect, useState } from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
   className?: string;
   spare?: string;
   errorSpare?: ReactElement;
}

const AppImage = memo((props: AppImageProps) => {
   const { className, src, alt = 'image', spare, errorSpare, ...otherProps } = props;
   const [isLoading, setIsLoading] = useState(true);
   const [hasError, setHasError] = useState(false);

   useEffect(() => {
      if (!src) return;

      const img = new Image();
      setIsLoading(true);
      setHasError(false);

      img.src = src;
      img.onload = () => {
         setIsLoading(false);
         setHasError(false);
      };
      img.onerror = () => {
         setIsLoading(false);
         setHasError(true);
      };
   }, [src]);

   if (isLoading && spare) {
      return <img className={className} src={spare} alt={alt} />;
   }
   if (errorSpare && hasError) {
      return errorSpare;
   }

   return <img className={className} src={src} alt={alt} {...otherProps} />;
});

AppImage.displayName = 'AppImage';

export { AppImage };
