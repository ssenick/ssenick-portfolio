import { useEffect, useState } from 'react';

export interface Dimensions {
   width: number;
   height: number;
}

export function useDimensions(): Dimensions {
   const [dimensions, setDimensions] = useState<Dimensions>({
      width: window.innerWidth ?? 0,
      height: window.innerHeight ?? 0,
   });

   useEffect(() => {
      const resize = () => {
         setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
         });
      };
      resize();
      window.addEventListener('resize', resize);
      return () => window.removeEventListener('resize', resize);
   }, []);

   return dimensions;
}
