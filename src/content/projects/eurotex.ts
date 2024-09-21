import BlogTablet from '@/assets/projects/blog/tablet/tablet.webp';
import BlogTabletSmall from '@/assets/projects/blog/tablet/tablet_small.webp';
import EurotexPreview from '@/assets/projects/eurotex/eurotex-small.webp';
import EurotexLaptop from '@/assets/projects/eurotex/laptop.png';
import type { projectType } from '@/types/projectsItems.ts';

export const eurotex: projectType = {
   id: 10,
   name: 'Eurotex',
   year: '2022',
   location: 'Canada',
   role: 'Website Layout Developer',
   projectURL: 'https://eurotex.ssenick.fun/',
   path: 'eurotex',
   images: {
      preview: EurotexPreview,
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
         laptop: { small: '', big: EurotexLaptop },
         tablet: {
            small: BlogTabletSmall,
            big: BlogTablet,
         },
         mobile: [],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
};
