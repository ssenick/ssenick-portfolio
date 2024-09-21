import BlogTablet from '@/assets/projects/blog/tablet/tablet.webp';
import BlogTabletSmall from '@/assets/projects/blog/tablet/tablet_small.webp';
import FoodRatePreview from '@/assets/projects/foodrate/foodrate-small.webp';
import FoodRateLaptop from '@/assets/projects/foodrate/laptop.png';
import type { projectType } from '@/types/projectsItems.ts';

export const foodRate: projectType = {
   id: 8,
   name: 'Foodrate',
   year: '2022',
   location: 'Belarus',
   role: 'Website Layout Developer',
   projectURL: 'https://foodrate.ssenick.fun/',
   gitURL: 'https://github.com/ssenick/FoodRate',
   path: 'foodrate',
   images: {
      preview: FoodRatePreview,
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
         laptop: { small: '', big: FoodRateLaptop },
         tablet: {
            small: BlogTabletSmall,
            big: BlogTablet,
         },
         mobile: [],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
};
