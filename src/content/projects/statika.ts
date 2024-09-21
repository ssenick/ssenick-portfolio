import BlogTablet from '@/assets/projects/blog/tablet/tablet.webp';
import BlogTabletSmall from '@/assets/projects/blog/tablet/tablet_small.webp';
import StatikaLaptop from '@/assets/projects/statika/laptop.png';
import StatikaPreview from '@/assets/projects/statika/statika-small.webp';
import type { projectType } from '@/types/projectsItems.ts';

export const statika: projectType = {
   id: 11,
   name: 'Statika',
   year: '2022',
   location: 'Slovakia',
   role: 'Website Layout Developer',
   projectURL: 'https://statika.ssenick.fun/',
   gitURL: 'https://github.com/ssenick/statika',
   path: 'statika',
   images: {
      preview: StatikaPreview,
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
         laptop: { small: '', big: StatikaLaptop },
         tablet: {
            small: BlogTabletSmall,
            big: BlogTablet,
         },
         mobile: [],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
};
