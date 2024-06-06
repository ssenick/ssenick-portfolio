import { useContext } from 'react';

import { MediaQueryContext } from '@/app/povaiders/MediaQueryProvaider';

export const useMediaQueryValues = () => {
   const context = useContext(MediaQueryContext);
   if (!context) {
      throw new Error('useMediaQueryValues must be used within a MediaQueryProvider');
   }
   return context;
};
