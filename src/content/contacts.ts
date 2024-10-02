import type { ILinksList } from '@/components/LinksList/LinksList.tsx';

export const PHONE = '+14037085691';
export const EMAIL = 'ssenick@ukr.net';

export const contacts: ILinksList[] = [
   {
      text: PHONE,
      href: `tel:${PHONE}`,
      target: '_self',
   },
   {
      text: EMAIL,
      href: `mailto:${EMAIL}`,
      target: '_self',
   },
];
