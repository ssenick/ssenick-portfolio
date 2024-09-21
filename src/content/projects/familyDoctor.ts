import BlogTablet from '@/assets/projects/blog/tablet/tablet.webp';
import BlogTabletSmall from '@/assets/projects/blog/tablet/tablet_small.webp';
import FunnyDoctorPreview from '@/assets/projects/funny-doctor/funny-doctor-small.webp';
import FunnyDoctorLaptop from '@/assets/projects/funny-doctor/laptop.png';
import type { projectType } from '@/types/projectsItems.ts';

export const familyDoctor: projectType = {
   id: 14,
   name: 'Family doctor',
   year: '2021',
   location: 'Russia',
   role: 'Website Layout Developer',
   projectURL: 'https://family-doctor.ssenick.fun/',
   gitURL: 'https://github.com/ssenick/family-doctor',
   path: 'family-doctor',
   images: {
      preview: FunnyDoctorPreview,
      sliders: [
         { big: '', small: '' },
         { big: '', small: '' },
         { big: '', small: '' },
         { big: '', small: '' },
         { big: '', small: '' },
         { big: '', small: '' },
         { big: '', small: '' },
         { big: '', small: '' },
      ],
      devices: {
         laptop: { small: '', big: FunnyDoctorLaptop },
         tablet: {
            small: BlogTabletSmall,
            big: BlogTablet,
         },
         mobile: [],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
};
