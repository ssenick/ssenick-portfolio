import Laptop from '@/assets/projects/blog/laptop/laptop.webp';
import LaptopSmall from '@/assets/projects/blog/laptop/laptop_small.webp';
import Mobile1 from '@/assets/projects/blog/mobile/mobile_1.webp';
import Mobile1Small from '@/assets/projects/blog/mobile/mobile_1_small.webp';
import Mobile2 from '@/assets/projects/blog/mobile/mobile_2.webp';
import Mobile2Small from '@/assets/projects/blog/mobile/mobile_2_small.webp';
import Mobile3 from '@/assets/projects/blog/mobile/mobile_3.webp';
import Mobile3Small from '@/assets/projects/blog/mobile/mobile_3_small.webp';
import Preview from '@/assets/projects/blog/preview.webp';
import SliderImage1 from '@/assets/projects/blog/sliders/image_1.webp';
import SliderImageSmall1 from '@/assets/projects/blog/sliders/image_1_small.webp';
import SliderImage2 from '@/assets/projects/blog/sliders/image_2.webp';
import SliderImageSmall2 from '@/assets/projects/blog/sliders/image_2_small.webp';
import SliderImage3 from '@/assets/projects/blog/sliders/image_3.webp';
import SliderImageSmall3 from '@/assets/projects/blog/sliders/image_3_small.webp';
import SliderImage4 from '@/assets/projects/blog/sliders/image_4.webp';
import SliderImageSmall4 from '@/assets/projects/blog/sliders/image_4_small.webp';
import SliderImage5 from '@/assets/projects/blog/sliders/image_5.webp';
import SliderImageSmall5 from '@/assets/projects/blog/sliders/image_5_small.webp';
import SliderImage6 from '@/assets/projects/blog/sliders/image_6.webp';
import SliderImageSmall6 from '@/assets/projects/blog/sliders/image_6_small.webp';
import SliderImage7 from '@/assets/projects/blog/sliders/image_7.webp';
import SliderImageSmall7 from '@/assets/projects/blog/sliders/image_7_small.webp';
import SliderImage8 from '@/assets/projects/blog/sliders/image_8.webp';
import SliderImageSmall8 from '@/assets/projects/blog/sliders/image_8_small.webp';
import Tablet from '@/assets/projects/blog/tablet/tablet.webp';
import TabletSmall from '@/assets/projects/blog/tablet/tablet_small.webp';
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
      preview: Preview,
      sliders: [
         { big: SliderImage1, small: SliderImageSmall1 },
         { big: SliderImage2, small: SliderImageSmall2 },
         { big: SliderImage3, small: SliderImageSmall3 },
         { big: SliderImage4, small: SliderImageSmall4 },
         { big: SliderImage5, small: SliderImageSmall5 },
         { big: SliderImage6, small: SliderImageSmall6 },
         { big: SliderImage7, small: SliderImageSmall7 },
         { big: SliderImage8, small: SliderImageSmall8 },
      ],
      devices: {
         laptop: {
            small: LaptopSmall,
            big: Laptop,
         },
         tablet: {
            small: TabletSmall,
            big: Tablet,
         },
         mobile: [
            { big: Mobile1, small: Mobile1Small },
            { big: Mobile2, small: Mobile2Small },
            { big: Mobile3, small: Mobile3Small },
         ],
      },
   },
   technologies:
      'React, React Router, Redux toolkit, TypeScript, ' +
      'Webpack, Vite, Storybook, Jest, Loki, i18next, Axios, Swiper',
};
