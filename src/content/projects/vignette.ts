import BlogTablet from '@/assets/projects/blog/tablet/tablet.webp';
import BlogTabletSmall from '@/assets/projects/blog/tablet/tablet_small.webp';
import VignetteLaptop from '@/assets/projects/vignette/laptop.png';
import VignettePreview from '@/assets/projects/vignette/vignette-small.webp';
import type { projectType } from '@/types/projectsItems.ts';

export const vignette: projectType = {
   id: 16,
   name: 'Vignette',
   year: '2021',
   location: 'Hungary',
   role: 'Website Layout Developer',
   projectURL: 'https://vignette.ssenick.fun/',
   gitURL: 'https://github.com/ssenick/vignette',
   path: 'vignette',
   images: {
      preview: VignettePreview,
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
         laptop: { small: '', big: VignetteLaptop },
         tablet: {
            small: BlogTabletSmall,
            big: BlogTablet,
         },
         mobile: [],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
};
