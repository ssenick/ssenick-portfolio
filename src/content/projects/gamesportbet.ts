import Laptop from '@/assets/projects/sportbet/laptop/laptop.webp';
import Laptop_small from '@/assets/projects/sportbet/laptop/laptop_small.webp';
import Mobile_1 from '@/assets/projects/sportbet/mobile/image_1.webp';
import Mobile_1_small from '@/assets/projects/sportbet/mobile/image_1_small.webp';
import Mobile_2 from '@/assets/projects/sportbet/mobile/image_2.webp';
import Mobile_2_small from '@/assets/projects/sportbet/mobile/image_2_small.webp';
import Mobile_3 from '@/assets/projects/sportbet/mobile/image_3.webp';
import Mobile_3_small from '@/assets/projects/sportbet/mobile/image_3_small.webp';
import Preview from '@/assets/projects/sportbet/preview.webp';
import Slider_1 from '@/assets/projects/sportbet/sliders/image_1.webp';
import Slider_1_small from '@/assets/projects/sportbet/sliders/image_1_small.webp';
import Slider_2 from '@/assets/projects/sportbet/sliders/image_2.webp';
import Slider_2_small from '@/assets/projects/sportbet/sliders/image_2_small.webp';
import Slider_3 from '@/assets/projects/sportbet/sliders/image_3.webp';
import Slider_3_small from '@/assets/projects/sportbet/sliders/image_3_small.webp';
import Slider_4 from '@/assets/projects/sportbet/sliders/image_4.webp';
import Slider_4_small from '@/assets/projects/sportbet/sliders/image_4_small.webp';
import Slider_5 from '@/assets/projects/sportbet/sliders/image_5.webp';
import Slider_5_small from '@/assets/projects/sportbet/sliders/image_5_small.webp';
import Slider_6 from '@/assets/projects/sportbet/sliders/image_6.webp';
import Slider_6_small from '@/assets/projects/sportbet/sliders/image_6_small.webp';
import Slider_7 from '@/assets/projects/sportbet/sliders/image_7.webp';
import Slider_7_small from '@/assets/projects/sportbet/sliders/image_7_small.webp';
import Slider_8 from '@/assets/projects/sportbet/sliders/image_8.webp';
import Slider_8_small from '@/assets/projects/sportbet/sliders/image_8_small.webp';
import Tablet from '@/assets/projects/sportbet/tablet/tablet.webp';
import Tablet_small from '@/assets/projects/sportbet/tablet/tablet_small.webp';
import type { projectType } from '@/types/projectsItems.ts';

export const gameSportBet: projectType = {
   id: 7,
   name: 'Gamesportbet',
   year: '2022',
   location: 'Belarus',
   role: 'Website Layout Developer',
   projectURL: 'https://gamesportbet.ssenick.fun/',
   gitURL: 'https://github.com/ssenick/GameSportBet',
   path: 'gamesportbet',
   images: {
      preview: Preview,
      sliders: [
         { big: Slider_1, small: Slider_1_small },
         { big: Slider_2, small: Slider_2_small },
         { big: Slider_3, small: Slider_3_small },
         { big: Slider_4, small: Slider_4_small },
         { big: Slider_5, small: Slider_5_small },
         { big: Slider_6, small: Slider_6_small },
         { big: Slider_7, small: Slider_7_small },
         { big: Slider_8, small: Slider_8_small },
      ],
      devices: {
         laptop: { small: Laptop_small, big: Laptop },
         tablet: {
            small: Tablet_small,
            big: Tablet,
         },
         mobile: [
            { big: Mobile_1, small: Mobile_1_small },
            { big: Mobile_2, small: Mobile_2_small },
            { big: Mobile_3, small: Mobile_3_small },
         ],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
};
