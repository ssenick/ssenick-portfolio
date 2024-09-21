import BlogTablet from '@/assets/projects/blog/tablet/tablet.webp';
import BlogTabletSmall from '@/assets/projects/blog/tablet/tablet_small.webp';
import PortfolioLaptop from '@/assets/projects/portfolio/laptop.png';
import PortfolioPreview from '@/assets/projects/portfolio/portfolio-small.webp';
import type { projectType } from '@/types/projectsItems.ts';

export const portfolio: projectType = {
   id: 6,
   name: 'Portfolio',
   year: '2023',
   location: 'Ukraine',
   role: 'Website Layout Developer',
   projectURL: 'https://portfolio.ssenick.fun/',
   gitURL: 'https://github.com/ssenick/dark-portfolio',
   path: 'portfolio',
   images: {
      preview: PortfolioPreview,
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
         laptop: { small: '', big: PortfolioLaptop },
         tablet: {
            small: BlogTabletSmall,
            big: BlogTablet,
         },
         mobile: [],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp',
};
