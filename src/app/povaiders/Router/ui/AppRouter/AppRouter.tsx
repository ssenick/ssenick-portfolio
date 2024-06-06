import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRoutersProps, routeConfig } from '@/config/route/routeConfig';

interface AppRouterProps {
   className?: string;
}

export const AppRouter = (props: AppRouterProps) => {
   const { className } = props;

   return (
      <div className={className}>
         <Suspense fallback={'Loading...'}>
            <Routes>
               {Object.values(routeConfig).map((el: AppRoutersProps) => (
                  <Route
                     key={el.path}
                     path={el.path}
                     // element={
                     //    el.authOnly ? <RequireAuth roles={el.roles}> {el.element} </RequireAuth> : el.element
                     // }
                     element={el.element}
                  />
               ))}
            </Routes>
         </Suspense>
      </div>
   );
};
