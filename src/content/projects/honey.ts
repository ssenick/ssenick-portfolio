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
      preview: 'https://files.ssenick.fun/portfolio/honey/preview.webp',
      sliders: [
         {
            big: 'https://files.ssenick.fun/portfolio/honey/sliders/image_1.webp',
            small: 'https://files.ssenick.fun/portfolio/honey/sliders/image_1_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/honey/sliders/image_2.webp',
            small: 'https://files.ssenick.fun/portfolio/honey/sliders/image_2_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/honey/sliders/image_3.webp',
            small: 'https://files.ssenick.fun/portfolio/honey/sliders/image_3_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/honey/sliders/image_4.webp',
            small: 'https://files.ssenick.fun/portfolio/honey/sliders/image_4_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/honey/sliders/image_5.webp',
            small: 'https://files.ssenick.fun/portfolio/honey/sliders/image_5_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/honey/sliders/image_6.webp',
            small: 'https://files.ssenick.fun/portfolio/honey/sliders/image_6_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/honey/sliders/image_8.webp',
            small: 'https://files.ssenick.fun/portfolio/honey/sliders/image_8_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/honey/sliders/image_7.webp',
            small: 'https://files.ssenick.fun/portfolio/honey/sliders/image_7_small.webp',
         },
      ],
      devices: {
         laptop: {
            big: 'https://files.ssenick.fun/portfolio/honey/laptop/laptop.webp',
            small: 'https://files.ssenick.fun/portfolio/honey/laptop/laptop_small.webp',
         },
         tablet: {
            big: 'https://files.ssenick.fun/portfolio/honey/tablet/tablet.webp',
            small: 'https://files.ssenick.fun/portfolio/honey/tablet/tablet_small.webp',
         },
         mobile: [
            {
               big: 'https://files.ssenick.fun/portfolio/honey/mobile/image_1.webp',
               small: 'https://files.ssenick.fun/portfolio/honey/mobile/image_1_small.webp',
            },
            {
               big: 'https://files.ssenick.fun/portfolio/honey/mobile/image_2.webp',
               small: 'https://files.ssenick.fun/portfolio/honey/mobile/image_2_small.webp',
            },
            {
               big: 'https://files.ssenick.fun/portfolio/honey/mobile/image_3.webp',
               small: 'https://files.ssenick.fun/portfolio/honey/mobile/image_3_small.webp',
            },
         ],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
};
