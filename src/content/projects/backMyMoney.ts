import BackMyMoneyPreview from '@/assets/projects/backmymoney/backmymoney-small.webp';
import BackMyMoneyLaptop from '@/assets/projects/backmymoney/laptop.png';
import BlogTablet from '@/assets/projects/blog/tablet/tablet.webp';
import BlogTabletSmall from '@/assets/projects/blog/tablet/tablet_small.webp';
import type { projectType } from '@/types/projectsItems.ts';

export const backMyMoney: projectType = {
   id: 9,
   name: 'BackMyMoney',
   year: '2022',
   location: 'Belarus',
   role: 'Website Layout Developer',
   projectURL: 'https://backmymoney.ssenick.fun/',
   gitURL: 'https://github.com/ssenick/backmymoney',
   path: 'backmymoney',
   images: {
      preview: BackMyMoneyPreview,
      sliders: [
         { big: '', small: '' },
         { big: '', small: '' },
         { big: '', small: '' },
         { big: '', small: '' },
         { big: '', small: '' },
         { big: '', small: '' },
         { big: '', small: '' },
         { big: '', small: '' },
      ],
      devices: {
         laptop: { small: '', big: BackMyMoneyLaptop },
         tablet: {
            small: BlogTabletSmall,
            big: BlogTablet,
         },
         mobile: [],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
};
