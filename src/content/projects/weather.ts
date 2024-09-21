import BlogTablet from '@/assets/projects/blog/tablet/tablet.webp';
import BlogTabletSmall from '@/assets/projects/blog/tablet/tablet_small.webp';
import WeatherLaptop from '@/assets/projects/weather/laptop.png';
import WeatherPreview from '@/assets/projects/weather/weather-small.webp';
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
      preview: WeatherPreview,
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
         laptop: { small: '', big: WeatherLaptop },
         tablet: {
            small: BlogTabletSmall,
            big: BlogTablet,
         },
         mobile: [],
      },
   },
   technologies: 'React, TypeScript,Open Weather API, Axios',
};
