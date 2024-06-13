import { getRouteAbout, getRouteContact } from '@/config/route/routeConfig';

import type { NavLinksType } from '../types/nav';

export const NavLinks: NavLinksType[] = [
   {
      path: getRouteAbout(),
      text: 'About',
   },
   {
      path: getRouteContact(),
      text: 'Contact',
   },
];
