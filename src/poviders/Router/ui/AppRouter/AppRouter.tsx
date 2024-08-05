import { useEffect } from 'react';
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

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location]);

   return (
      <Suspense fallback={''}>
         <Routes location={location}>
            {Object.values(routeConfig).map((el: AppRoutersProps) => (
               <Route key={el.path} path={el.path} element={el.element} />
            ))}
         </Routes>
      </Suspense>
   );
};
