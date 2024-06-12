import { useContext } from 'react';

import { MediaQueryContext } from '@/app/poviders/MediaQueryProvider';

export const useMediaQueryValues = () => {
   const context = useContext(MediaQueryContext);
   if (!context) {
      throw new Error('useMediaQueryValues must be used within a MediaQueryProvider');
   }
   return context;
};
