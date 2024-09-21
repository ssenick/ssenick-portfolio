import BlogTablet from '@/assets/projects/blog/tablet/tablet.webp';
import BlogTabletSmall from '@/assets/projects/blog/tablet/tablet_small.webp';
import HoneyPreview from '@/assets/projects/honey/honey-small.webp';
import HoneyLaptop from '@/assets/projects/honey/laptop.png';
import type { projectType } from '@/types/projectsItems.ts';

export const honey: projectType = {
   id: 15,
   name: 'Honey',
   year: '2021',
   location: 'Ukraine',
   role: 'Website Layout Developer',
   projectURL: 'https://honey.ssenick.fun/',
   gitURL: 'https://github.com/ssenick/honey',
   path: 'honey',
   images: {
      preview: HoneyPreview,
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
         laptop: { small: '', big: HoneyLaptop },
         tablet: {
            small: BlogTabletSmall,
            big: BlogTablet,
         },
         mobile: [],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
};
