import Laptop from '@/assets/projects/admin/laptop/laptop.webp';
import LaptopSmall from '@/assets/projects/admin/laptop/laptop_small.webp';
import Mobile1 from '@/assets/projects/admin/mobile/image_1.webp';
import Mobile1_Small from '@/assets/projects/admin/mobile/image_1_small.webp';
import Mobile2 from '@/assets/projects/admin/mobile/image_2.webp';
import Mobile2_Small from '@/assets/projects/admin/mobile/image_2_small.webp';
import Mobile3 from '@/assets/projects/admin/mobile/image_3.webp';
import Mobile3_Small from '@/assets/projects/admin/mobile/image_3_small.webp';
import Preview from '@/assets/projects/admin/preview.webp';
import Slider_1 from '@/assets/projects/admin/sliders/image_1.webp';
import Slider_1_small from '@/assets/projects/admin/sliders/image_1_small.webp';
import Slider_2 from '@/assets/projects/admin/sliders/image_2.webp';
import Slider_2_small from '@/assets/projects/admin/sliders/image_2_small.webp';
import Slider_3 from '@/assets/projects/admin/sliders/image_3.webp';
import Slider_3_small from '@/assets/projects/admin/sliders/image_3_small.webp';
import Slider_4 from '@/assets/projects/admin/sliders/image_4.webp';
import Slider_4_small from '@/assets/projects/admin/sliders/image_4_small.webp';
import Slider_5 from '@/assets/projects/admin/sliders/image_5.webp';
import Slider_5_small from '@/assets/projects/admin/sliders/image_5_small.webp';
import Slider_6 from '@/assets/projects/admin/sliders/image_6.webp';
import Slider_6_small from '@/assets/projects/admin/sliders/image_6_small.webp';
import Slider_7 from '@/assets/projects/admin/sliders/image_7.webp';
import Slider_7_small from '@/assets/projects/admin/sliders/image_7_small.webp';
import Slider_8 from '@/assets/projects/admin/sliders/image_8.webp';
import Slider_8_small from '@/assets/projects/admin/sliders/image_8_small.webp';
import Tablet from '@/assets/projects/admin/tablet/image.webp';
import Tablet_small from '@/assets/projects/admin/tablet/image_small.webp';
import type { projectType } from '@/types/projectsItems.ts';

export const adminPanel: projectType = {
   id: 2,
   name: 'Admin-panel',
   year: '2024',
   location: 'Canada',
   role: 'Frontend Developer',
   projectURL: 'https://web-react-admin.ssenick.fun',
   gitURL: 'https://github.com/ssenick/web-react-admin',
   path: 'admin-panel',
   images: {
      preview: Preview,
      sliders: [
         { big: Slider_1, small: Slider_1_small },
         { big: Slider_5, small: Slider_5_small },
         { big: Slider_4, small: Slider_4_small },
         { big: Slider_6, small: Slider_6_small },
         { big: Slider_2, small: Slider_2_small },
         { big: Slider_7, small: Slider_7_small },
         { big: Slider_8, small: Slider_8_small },
         { big: Slider_3, small: Slider_3_small },
      ],
      devices: {
         laptop: { small: LaptopSmall, big: Laptop },
         tablet: {
            small: Tablet_small,
            big: Tablet,
         },
         mobile: [
            { small: Mobile1_Small, big: Mobile1 },
            { small: Mobile2_Small, big: Mobile2 },
            { small: Mobile3_Small, big: Mobile3 },
         ],
      },
   },
   technologies: 'React, React Router, Axios,React pro sidebar, Material UI, Fullcalendar, Formik, Yup, Nivo',
};