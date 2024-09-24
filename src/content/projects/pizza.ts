import Laptop from '@/assets/projects/pizza/laptop/laptop.webp';
import Laptop_small from '@/assets/projects/pizza/laptop/laptop_small.webp';
import Mobile_1 from '@/assets/projects/pizza/mobile/image_1.webp';
import Mobile_1_small from '@/assets/projects/pizza/mobile/image_1_small.webp';
import Mobile_2 from '@/assets/projects/pizza/mobile/image_2.webp';
import Mobile_2_small from '@/assets/projects/pizza/mobile/image_2_small.webp';
import Mobile_3 from '@/assets/projects/pizza/mobile/image_3.webp';
import Mobile_3_small from '@/assets/projects/pizza/mobile/image_3_small.webp';
import Preview from '@/assets/projects/pizza/preview.webp';
import SLider_1 from '@/assets/projects/pizza/sliders/image_1.webp';
import Slider_1_small from '@/assets/projects/pizza/sliders/image_1_small.webp';
import SLider_2 from '@/assets/projects/pizza/sliders/image_2.webp';
import Slider_2_small from '@/assets/projects/pizza/sliders/image_2_small.webp';
import SLider_3 from '@/assets/projects/pizza/sliders/image_3.webp';
import Slider_3_small from '@/assets/projects/pizza/sliders/image_3_small.webp';
import SLider_4 from '@/assets/projects/pizza/sliders/image_4.webp';
import Slider_4_small from '@/assets/projects/pizza/sliders/image_4_small.webp';
import SLider_5 from '@/assets/projects/pizza/sliders/image_5.webp';
import Slider_5_small from '@/assets/projects/pizza/sliders/image_5_small.webp';
import SLider_6 from '@/assets/projects/pizza/sliders/image_6.webp';
import Slider_6_small from '@/assets/projects/pizza/sliders/image_6_small.webp';
import SLider_7 from '@/assets/projects/pizza/sliders/image_7.webp';
import Slider_7_small from '@/assets/projects/pizza/sliders/image_7_small.webp';
import SLider_8 from '@/assets/projects/pizza/sliders/image_8.webp';
import Slider_8_small from '@/assets/projects/pizza/sliders/image_8_small.webp';
import Tablet from '@/assets/projects/pizza/tablet/tablet.webp';
import Tablet_small from '@/assets/projects/pizza/tablet/tablet_small.webp';
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
      preview: Preview,
      sliders: [
         { big: SLider_1, small: Slider_1_small },
         { big: SLider_2, small: Slider_2_small },
         { big: SLider_3, small: Slider_3_small },
         { big: SLider_4, small: Slider_4_small },
         { big: SLider_5, small: Slider_5_small },
         { big: SLider_6, small: Slider_6_small },
         { big: SLider_7, small: Slider_7_small },
         { big: SLider_8, small: Slider_8_small },
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
   technologies: 'React, TypeScript, Redux Toolkit, React Router v6, Axios',
};
