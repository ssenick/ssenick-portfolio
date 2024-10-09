import { getRouteAbout, getRouteContact, getRouteHome, getRouteWork } from '@/config/route/routeConfig';

import type { NavLinksType } from '../types/types';

export const navLinks: NavLinksType[] = [
   {
      path: getRouteHome(),
      text: 'Home',
   },
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
