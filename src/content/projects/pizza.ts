import type { projectType } from '@/types/projectsItems.ts';

export const pizza: projectType = {
   id: 4,
   name: 'Pizza',
   year: '2023',
   location: 'Canada',
   role: 'Frontend Developer',
   projectURL: 'https://web-application-react-v2.ssenick.fun/',
   gitURL: 'https://github.com/ssenick/web-application-pizza-v2',
   path: 'pizza',
   images: {
      preview: 'https://files.ssenick.fun/portfolio/pizza/preview.webp',
      sliders: [
         {
            big: 'https://files.ssenick.fun/portfolio/pizza/sliders/image_1.webp',
            small: 'https://files.ssenick.fun/portfolio/pizza/sliders/image_1_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/pizza/sliders/image_2.webp',
            small: 'https://files.ssenick.fun/portfolio/pizza/sliders/image_2_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/pizza/sliders/image_3.webp',
            small: 'https://files.ssenick.fun/portfolio/pizza/sliders/image_3_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/pizza/sliders/image_4.webp',
            small: 'https://files.ssenick.fun/portfolio/pizza/sliders/image_4_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/pizza/sliders/image_5.webp',
            small: 'https://files.ssenick.fun/portfolio/pizza/sliders/image_5_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/pizza/sliders/image_6.webp',
            small: 'https://files.ssenick.fun/portfolio/pizza/sliders/image_6_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/pizza/sliders/image_7.webp',
            small: 'https://files.ssenick.fun/portfolio/pizza/sliders/image_7_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/pizza/sliders/image_8.webp',
            small: 'https://files.ssenick.fun/portfolio/pizza/sliders/image_8_small.webp',
         },
      ],
      devices: {
         laptop: {
            big: 'https://files.ssenick.fun/portfolio/pizza/laptop/laptop.webp',
            small: 'https://files.ssenick.fun/portfolio/pizza/laptop/laptop_small.webp',
         },
         tablet: {
            big: 'https://files.ssenick.fun/portfolio/pizza/tablet/tablet.webp',
            small: 'https://files.ssenick.fun/portfolio/pizza/tablet/tablet_small.webp',
         },
         mobile: [
            {
               big: 'https://files.ssenick.fun/portfolio/pizza/mobile/image_1.webp',
               small: 'https://files.ssenick.fun/portfolio/pizza/mobile/image_1_small.webp',
            },
            {
               big: 'https://files.ssenick.fun/portfolio/pizza/mobile/image_2.webp',
               small: 'https://files.ssenick.fun/portfolio/pizza/mobile/image_2_small.webp',
            },
            {
               big: 'https://files.ssenick.fun/portfolio/pizza/mobile/image_3.webp',
               small: 'https://files.ssenick.fun/portfolio/pizza/mobile/image_3_small.webp',
            },
         ],
      },
   },
   technologies: 'React, TypeScript, Redux Toolkit, React Router v6, Axios',
};
