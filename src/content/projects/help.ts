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
      preview: 'https://files.ssenick.fun/portfolio/help/preview.webp',
      sliders: [
         {
            big: 'https://files.ssenick.fun/portfolio/help/sliders/image_1.webp',
            small: 'https://files.ssenick.fun/portfolio/help/sliders/image_1_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/help/sliders/image_2.webp',
            small: 'https://files.ssenick.fun/portfolio/help/sliders/image_2_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/help/sliders/image_3.webp',
            small: 'https://files.ssenick.fun/portfolio/help/sliders/image_3_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/help/sliders/image_4.webp',
            small: 'https://files.ssenick.fun/portfolio/help/sliders/image_4_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/help/sliders/image_5.webp',
            small: 'https://files.ssenick.fun/portfolio/help/sliders/image_5_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/help/sliders/image_6.webp',
            small: 'https://files.ssenick.fun/portfolio/help/sliders/image_6_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/help/sliders/image_8.webp',
            small: 'https://files.ssenick.fun/portfolio/help/sliders/image_8_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/help/sliders/image_7.webp',
            small: 'https://files.ssenick.fun/portfolio/help/sliders/image_7_small.webp',
         },
      ],
      devices: {
         laptop: {
            big: 'https://files.ssenick.fun/portfolio/help/laptop/laptop.webp',
            small: 'https://files.ssenick.fun/portfolio/help/laptop/laptop_small.webp',
         },
         tablet: {
            big: 'https://files.ssenick.fun/portfolio/help/tablet/tablet.webp',
            small: 'https://files.ssenick.fun/portfolio/help/tablet/tablet_small.webp',
         },
         mobile: [
            {
               big: 'https://files.ssenick.fun/portfolio/help/mobile/image_1.webp',
               small: 'https://files.ssenick.fun/portfolio/help/mobile/image_1_small.webp',
            },
            {
               big: 'https://files.ssenick.fun/portfolio/help/mobile/image_2.webp',
               small: 'https://files.ssenick.fun/portfolio/help/mobile/image_2_small.webp',
            },
            {
               big: 'https://files.ssenick.fun/portfolio/help/mobile/image_3.webp',
               small: 'https://files.ssenick.fun/portfolio/help/mobile/image_3_small.webp',
            },
         ],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
};
