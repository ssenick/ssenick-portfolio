import { getRouteAbout, getRouteContact } from '@/config/route/routeConfig';

import { NavLinks } from '../types/nav';

export const NavLinks: NavLinks[] = [
   {
      path: getRouteAbout(),
      text: 'About',
   },
   {
      path: getRouteContact(),
      text: 'Contact',
   },
];
