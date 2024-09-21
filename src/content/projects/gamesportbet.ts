import BlogTablet from '@/assets/projects/blog/tablet/tablet.webp';
import BlogTabletSmall from '@/assets/projects/blog/tablet/tablet_small.webp';
import GameSportBetPreview from '@/assets/projects/sportbet/gamesport-small.webp';
import GameSportBetLaptop from '@/assets/projects/sportbet/laptop.png';
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
      preview: GameSportBetPreview,
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
         laptop: { small: '', big: GameSportBetLaptop },
         tablet: {
            small: BlogTabletSmall,
            big: BlogTablet,
         },
         mobile: [],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
};
