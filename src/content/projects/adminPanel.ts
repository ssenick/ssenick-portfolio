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
      preview: 'https://files.ssenick.fun/portfolio/admin/preview.webp',
      sliders: [
         {
            big: 'https://files.ssenick.fun/portfolio/admin/sliders/image_1.webp',
            small: 'https://files.ssenick.fun/portfolio/admin/sliders/image_1_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/admin/sliders/image_2.webp',
            small: 'https://files.ssenick.fun/portfolio/admin/sliders/image_2_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/admin/sliders/image_3.webp',
            small: 'https://files.ssenick.fun/portfolio/admin/sliders/image_3_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/admin/sliders/image_4.webp',
            small: 'https://files.ssenick.fun/portfolio/admin/sliders/image_4_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/admin/sliders/image_5.webp',
            small: 'https://files.ssenick.fun/portfolio/admin/sliders/image_5_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/admin/sliders/image_6.webp',
            small: 'https://files.ssenick.fun/portfolio/admin/sliders/image_6_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/admin/sliders/image_7.webp',
            small: 'https://files.ssenick.fun/portfolio/admin/sliders/image_7_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/admin/sliders/image_8.webp',
            small: 'https://files.ssenick.fun/portfolio/admin/sliders/image_8_small.webp',
         },
      ],
      devices: {
         laptop: {
            big: 'https://files.ssenick.fun/portfolio/admin/laptop/laptop.webp',
            small: 'https://files.ssenick.fun/portfolio/admin/laptop/laptop_small.webp',
         },
         tablet: {
            big: 'https://files.ssenick.fun/portfolio/admin/tablet/image.webp',
            small: 'https://files.ssenick.fun/portfolio/admin/tablet/image_small.webp',
         },
         mobile: [
            {
               big: 'https://files.ssenick.fun/portfolio/admin/mobile/image_1.webp',
               small: 'https://files.ssenick.fun/portfolio/admin/mobile/image_1_small.webp',
            },
            {
               big: 'https://files.ssenick.fun/portfolio/admin/mobile/image_2.webp',
               small: 'https://files.ssenick.fun/portfolio/admin/mobile/image_2_small.webp',
            },
            {
               big: 'https://files.ssenick.fun/portfolio/admin/mobile/image_3.webp',
               small: 'https://files.ssenick.fun/portfolio/admin/mobile/image_3_small.webp',
            },
         ],
      },
   },
   technologies: 'React, React Router, Axios,React pro sidebar, Material UI, Fullcalendar, Formik, Yup, Nivo',
};
