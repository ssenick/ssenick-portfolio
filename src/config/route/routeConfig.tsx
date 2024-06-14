import { type RouteProps } from 'react-router-dom';

import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { WorkPage } from '@/pages/WorkPage';

export type AppRoutersProps = RouteProps & {
   authOnly?: boolean;
};

export enum AppRoutes {
   HOME = 'home',
   ABOUT = 'about',
   WORK = 'work',
   CONTACT = 'contact',
   FORBIDDEN = 'forbidden',
   // last
   NOT_FOUND = 'notFound',
}

export const getRouteHome = (): string => '/';
export const getRouteAbout = (): string => '/about';
export const getRouteWork = (): string => '/work';
export const getRouteContact = (): string => '/contact';
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
   [AppRoutes.WORK]: {
      path: getRouteWork(),
      element: <WorkPage />,
   },
   [AppRoutes.CONTACT]: {
      path: getRouteContact(),
      element: <ContactPage />,
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
