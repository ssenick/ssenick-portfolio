import BlogTablet from '@/assets/projects/blog/tablet/tablet.webp';
import BlogTabletSmall from '@/assets/projects/blog/tablet/tablet_small.webp';
import GartPreview from '@/assets/projects/gart/gart-small.webp';
import GartLaptop from '@/assets/projects/gart/laptop.png';
import type { projectType } from '@/types/projectsItems.ts';

export const gart: projectType = {
   id: 12,
   name: 'Gart',
   year: '2021',
   location: 'Russia',
   role: 'Website Layout Developer',
   projectURL: 'https://gart.ssenick.fun/',
   gitURL: 'https://github.com/ssenick/GART',
   path: 'gart',
   images: {
      preview: GartPreview,
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
         laptop: { small: '', big: GartLaptop },
         tablet: {
            small: BlogTabletSmall,
            big: BlogTablet,
         },
         mobile: [],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
};
