import ReactLenis from '@studio-freight/react-lenis';
import { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import type { AppRoutersProps } from '@/config/route/routeConfig';
import { routeConfig } from '@/config/route/routeConfig';
import { useFirstRender } from '@/hooks/useFirstRender.ts';
import { PageTransition } from '@/poviders/PageTransition';

export const AppRouter = () => {
   const location = useLocation();
   const inited = useFirstRender();

   return (
      <Suspense fallback={''}>
         <Routes location={location}>
            {Object.values(routeConfig).map((el: AppRoutersProps) => (
               <Route
                  key={el.path}
                  path={el.path}
                  element={
                     <PageTransition inited={inited} location={location}>
                        <ReactLenis root>{el.element}</ReactLenis>
                     </PageTransition>
                  }
               />
            ))}
         </Routes>
      </Suspense>
   );
};
