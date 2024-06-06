import { type RouteProps } from 'react-router-dom';

import { AboutPage } from '@/pages/AboutPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export type AppRoutersProps = RouteProps & {
   authOnly?: boolean;
};

export enum AppRoutes {
   HOME = 'home',
   ABOUT = 'about',
   FORBIDDEN = 'forbidden',
   // last
   NOT_FOUND = 'notFound',
}

export const getRouteHome = (): string => '/';
export const getRouteAbout = (): string => '/about';
// last
export const getRouteForbidden = (): string => '/forbidden';

export const routeConfig: Record<AppRoutes, AppRoutersProps> = {
   [AppRoutes.HOME]: {
      path: getRouteHome(),
      element: <HomePage />,
   },
   [AppRoutes.ABOUT]: {
      path: getRouteAbout(),
      element: <AboutPage />,
   },

   [AppRoutes.FORBIDDEN]: {
      path: getRouteForbidden(),
      element: <ForbiddenPage />,
   },

   // last
   [AppRoutes.NOT_FOUND]: {
      path: '*',
      element: <NotFoundPage />,
   },
};
