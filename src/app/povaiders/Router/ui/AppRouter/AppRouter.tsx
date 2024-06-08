import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { type Location } from 'react-router-dom';

import type { AppRoutersProps } from '@/config/route/routeConfig';
import { routeConfig } from '@/config/route/routeConfig';

interface AppRouterProps {
   location: Location;
}

export const AppRouter = (props: AppRouterProps) => {
   const { location } = props;

   return (
      <>
         <Suspense fallback={'Loading...'}>
            <Routes location={location}>
               {Object.values(routeConfig).map((el: AppRoutersProps) => (
                  <Route key={el.path} path={el.path} element={el.element} />
               ))}
            </Routes>
         </Suspense>
      </>
   );
};
