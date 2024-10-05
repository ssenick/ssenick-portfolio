import type { projectType } from '@/types/projectsItems.ts';

export const weather: projectType = {
   id: 5,
   name: 'Weather',
   year: '2023',
   location: 'Slovakia',
   role: 'Frontend Developer',
   projectURL: 'https://web-app-weather-typescript.ssenick.fun/',
   gitURL: 'https://github.com/ssenick/web-app-weather-typescript',
   path: 'weather',
   images: {
      preview: 'https://files.ssenick.fun/portfolio/weather/preview.webp',
      sliders: [
         {
            big: 'https://files.ssenick.fun/portfolio/weather/sliders/image_1.webp',
            small: 'https://files.ssenick.fun/portfolio/weather/sliders/image_1_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/weather/sliders/image_2.webp',
            small: 'https://files.ssenick.fun/portfolio/weather/sliders/image_2_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/weather/sliders/image_3.webp',
            small: 'https://files.ssenick.fun/portfolio/weather/sliders/image_3_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/weather/sliders/image_4.webp',
            small: 'https://files.ssenick.fun/portfolio/weather/sliders/image_4_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/weather/sliders/image_5.webp',
            small: 'https://files.ssenick.fun/portfolio/weather/sliders/image_5_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/weather/sliders/image_6.webp',
            small: 'https://files.ssenick.fun/portfolio/weather/sliders/image_6_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/weather/sliders/image_7.webp',
            small: 'https://files.ssenick.fun/portfolio/weather/sliders/image_7_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/weather/sliders/image_8.webp',
            small: 'https://files.ssenick.fun/portfolio/weather/sliders/image_8_small.webp',
         },
      ],
      devices: {
         laptop: {
            big: 'https://files.ssenick.fun/portfolio/weather/laptop/laptop.webp',
            small: 'https://files.ssenick.fun/portfolio/weather/laptop/laptop_small.webp',
         },
         tablet: {
            big: 'https://files.ssenick.fun/portfolio/weather/tablet/tablet.webp',
            small: 'https://files.ssenick.fun/portfolio/weather/tablet/tablet_small.webp',
         },
         mobile: [
            {
               big: 'https://files.ssenick.fun/portfolio/weather/mobile/image_1.webp',
               small: 'https://files.ssenick.fun/portfolio/weather/mobile/image_1_small.webp',
            },
            {
               big: 'https://files.ssenick.fun/portfolio/weather/mobile/image_2.webp',
               small: 'https://files.ssenick.fun/portfolio/weather/mobile/image_2_small.webp',
            },
            {
               big: 'https://files.ssenick.fun/portfolio/weather/mobile/image_3.webp',
               small: 'https://files.ssenick.fun/portfolio/weather/mobile/image_3_small.webp',
            },
         ],
      },
   },
   technologies: 'React, TypeScript,Open Weather API, Axios',
};
