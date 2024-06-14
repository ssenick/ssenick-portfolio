import { getRouteAbout, getRouteContact, getRouteWork } from '@/config/route/routeConfig';

import type { NavLinksType } from '../types/nav';

export const NavLinks: NavLinksType[] = [
   {
      path: getRouteAbout(),
      text: 'About',
   },
   {
      path: getRouteWork(),
      text: 'Work',
   },
   {
      path: getRouteContact(),
      text: 'Contact',
   },
];
