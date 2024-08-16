import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { type Location } from 'react-router-dom';

import type { AppRoutersProps } from '@/config/route/routeConfig';
import { routeConfig } from '@/config/route/routeConfig';
import { PageTransition } from '@/poviders/PageTransition';

interface AppRouterProps {
   location: Location;
}

export const AppRouter = (props: AppRouterProps) => {
   const { location } = props;

   return (
      <Suspense fallback={''}>
         <Routes location={location}>
            {Object.values(routeConfig).map((el: AppRoutersProps) => (
               <Route
                  key={el.path}
                  path={el.path}
                  element={<PageTransition location={location}>{el.element}</PageTransition>}
               />
            ))}
         </Routes>
      </Suspense>
   );
};
