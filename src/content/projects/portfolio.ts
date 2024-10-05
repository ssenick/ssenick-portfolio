import type { projectType } from '@/types/projectsItems.ts';

export const portfolio: projectType = {
   id: 6,
   name: 'Portfolio',
   year: '2023',
   location: 'Ukraine',
   role: 'Website Layout Developer',
   projectURL: 'https://portfolio.ssenick.fun/',
   gitURL: 'https://github.com/ssenick/dark-portfolio',
   path: 'portfolio',
   images: {
      preview: 'https://files.ssenick.fun/portfolio/portfolio/preview.webp',
      sliders: [
         {
            big: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_1.webp',
            small: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_1_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_2.webp',
            small: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_2_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_3.webp',
            small: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_3_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_4.webp',
            small: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_4_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_5.webp',
            small: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_5_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_6.webp',
            small: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_6_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_8.webp',
            small: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_8_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_7.webp',
            small: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_7_small.webp',
         },
      ],
      devices: {
         laptop: {
            big: 'https://files.ssenick.fun/portfolio/portfolio/laptop/laptop.webp',
            small: 'https://files.ssenick.fun/portfolio/portfolio/laptop/laptop_small.webp',
         },
         tablet: {
            big: 'https://files.ssenick.fun/portfolio/portfolio/tablet/tablet.webp',
            small: 'https://files.ssenick.fun/portfolio/portfolio/tablet/tablet_small.webp',
         },
         mobile: [
            {
               big: 'https://files.ssenick.fun/portfolio/portfolio/mobile/image_1.webp',
               small: 'https://files.ssenick.fun/portfolio/portfolio/mobile/image_1_small.webp',
            },
            {
               big: 'https://files.ssenick.fun/portfolio/portfolio/mobile/image_2.webp',
               small: 'https://files.ssenick.fun/portfolio/portfolio/mobile/image_2_small.webp',
            },
            {
               big: 'https://files.ssenick.fun/portfolio/portfolio/mobile/image_3.webp',
               small: 'https://files.ssenick.fun/portfolio/portfolio/mobile/image_3_small.webp',
            },
         ],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp',
};
