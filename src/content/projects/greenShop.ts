import BlogTablet from '@/assets/projects/blog/tablet/tablet.webp';
import BlogTabletSmall from '@/assets/projects/blog/tablet/tablet_small.webp';
import GreenShopPreview from '@/assets/projects/greenshop/greenshop-small.webp';
import GreenShopLaptop from '@/assets/projects/greenshop/laptop.png';
import type { projectType } from '@/types/projectsItems.ts';

export const greenShop: projectType = {
   id: 3,
   name: 'Green-shop',
   year: '2023',
   location: 'Canada',
   role: 'Website Layout Developer',
   projectURL: 'https://greenshop.ssenick.fun/',
   gitURL: 'https://github.com/ssenick/greenshop',
   path: 'green-shop',
   images: {
      preview: GreenShopPreview,
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
         laptop: { small: '', big: GreenShopLaptop },
         tablet: {
            small: BlogTabletSmall,
            big: BlogTablet,
         },
         mobile: [],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, GSAP, Barba, lightgallery, Swiper',
};
