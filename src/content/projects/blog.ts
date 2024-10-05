import type { projectType } from '@/types/projectsItems.ts';

export const blog: projectType = {
   id: 1,
   name: 'Blog',
   year: '2024',
   location: 'Canada',
   role: 'Frontend Developer',
   projectURL: 'https://dulcet-pudding-009166.netlify.app',
   gitURL: 'https://github.com/ssenick/web-mini-project',
   path: 'blog',
   images: {
      preview: 'https://files.ssenick.fun/portfolio/blog/preview.webp',
      sliders: [
         {
            big: 'https://files.ssenick.fun/portfolio/blog/sliders/image_1.webp',
            small: 'https://files.ssenick.fun/portfolio/blog/sliders/image_1_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/blog/sliders/image_2.webp',
            small: 'https://files.ssenick.fun/portfolio/blog/sliders/image_2_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/blog/sliders/image_3.webp',
            small: 'https://files.ssenick.fun/portfolio/blog/sliders/image_3_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/blog/sliders/image_4.webp',
            small: 'https://files.ssenick.fun/portfolio/blog/sliders/image_4_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/blog/sliders/image_5.webp',
            small: 'https://files.ssenick.fun/portfolio/blog/sliders/image_5_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/blog/sliders/image_6.webp',
            small: 'https://files.ssenick.fun/portfolio/blog/sliders/image_6_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/blog/sliders/image_7.webp',
            small: 'https://files.ssenick.fun/portfolio/blog/sliders/image_7_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/blog/sliders/image_8.webp',
            small: 'https://files.ssenick.fun/portfolio/blog/sliders/image_8_small.webp',
         },
      ],
      devices: {
         laptop: {
            big: 'https://files.ssenick.fun/portfolio/blog/laptop/laptop.webp',
            small: 'https://files.ssenick.fun/portfolio/blog/laptop/laptop_small.webp',
         },
         tablet: {
            big: 'https://files.ssenick.fun/portfolio/blog/tablet/tablet.webp',
            small: 'https://files.ssenick.fun/portfolio/blog/tablet/tablet_small.webp',
         },
         mobile: [
            {
               big: 'https://files.ssenick.fun/portfolio/blog/mobile/mobile_1.webp',
               small: 'https://files.ssenick.fun/portfolio/blog/mobile/mobile_1_small.webp',
            },
            {
               big: 'https://files.ssenick.fun/portfolio/blog/mobile/mobile_2.webp',
               small: 'https://files.ssenick.fun/portfolio/blog/mobile/mobile_2_small.webp',
            },
            {
               big: 'https://files.ssenick.fun/portfolio/blog/mobile/mobile_3.webp',
               small: 'https://files.ssenick.fun/portfolio/blog/mobile/mobile_3_small.webp',
            },
         ],
      },
   },
   technologies:
      'React, React Router, Redux toolkit, TypeScript, ' +
      'Webpack, Vite, Storybook, Jest, Loki, i18next, Axios, Swiper',
};
