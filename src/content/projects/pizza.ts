import BlogTablet from '@/assets/projects/blog/tablet/tablet.webp';
import BlogTabletSmall from '@/assets/projects/blog/tablet/tablet_small.webp';
import PizzaLaptop from '@/assets/projects/pizza/laptop.png';
import PizzaPreview from '@/assets/projects/pizza/pizza-small.webp';
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
      preview: PizzaPreview,
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
         laptop: { small: '', big: PizzaLaptop },
         tablet: {
            small: BlogTabletSmall,
            big: BlogTablet,
         },
         mobile: [],
      },
   },
   technologies: 'React, TypeScript, Redux Toolkit, React Router v6, Axios',
};
