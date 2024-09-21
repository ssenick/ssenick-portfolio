import BlogTablet from '@/assets/projects/blog/tablet/tablet.webp';
import BlogTabletSmall from '@/assets/projects/blog/tablet/tablet_small.webp';
import HelpPreview from '@/assets/projects/help/help-small.webp';
import HelpLaptop from '@/assets/projects/help/laptop.png';
import type { projectType } from '@/types/projectsItems.ts';

export const help: projectType = {
   id: 13,
   name: 'Help',
   year: '2021',
   location: 'Russia',
   role: 'Website Layout Developer',
   projectURL: 'https://help.ssenick.fun/',
   gitURL: 'https://github.com/ssenick/help',
   path: 'help',
   images: {
      preview: HelpPreview,
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
         laptop: { small: '', big: HelpLaptop },
         tablet: {
            small: BlogTabletSmall,
            big: BlogTablet,
         },
         mobile: [],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
};
