import AdminPreview from '@/assets/projects/admin/admin-small.webp';
import BackMyMoneyPreview from '@/assets/projects/backmymoney/backmymoney-small.webp';
import BlogPreview from '@/assets/projects/blog/blog-small.webp';
import EurotexPreview from '@/assets/projects/eurotex/eurotex-small.webp';
import FoodRatePreview from '@/assets/projects/foodrate/foodrate-small.webp';
import FunnyDoctorPreview from '@/assets/projects/funny-doctor/funny-doctor-small.webp';
import GartPreview from '@/assets/projects/gart/gart-small.webp';
import GreenShopPreview from '@/assets/projects/greenshop/greenshop-small.webp';
import HelpPreview from '@/assets/projects/help/help-small.webp';
import HoneyPreview from '@/assets/projects/honey/honey-small.webp';
import PizzaPreview from '@/assets/projects/pizza/pizza-small.webp';
import PortfolioPreview from '@/assets/projects/portfolio/portfolio-small.webp';
import GameSportBetPreview from '@/assets/projects/sportbet/gamesport-small.webp';
import StatikarPreview from '@/assets/projects/statika/statika-small.webp';
import VignettePreview from '@/assets/projects/vignette/vignette-small.webp';
import WeatherPreview from '@/assets/projects/weather/weather-small.webp';
import type { projectType } from '@/types/projectsItems';

export const projects: projectType[] = [
   {
      id: 1,
      name: 'Blog',
      year: '2024',
      src: 'https://dulcet-pudding-009166.netlify.app',
      path: 'blog',
      images: { preview: BlogPreview },
      technologies:
         'React, React Router, Redux toolkit, TypeScript, ' +
         'Webpack, Vite, Storybook, Jest, Loki, i18next, Axios, Swiper',
   },
   {
      id: 2,
      name: 'Admin-panel',
      year: '2024',
      src: 'https://web-react-admin.ssenick.fun',
      path: 'admin-panel',
      images: { preview: AdminPreview },
      technologies:
         'React, React Router, Axios,React pro sidebar, Material UI, Fullcalendar, Formik, Yup, Nivo',
   },
   {
      id: 3,
      name: 'Green-shop',
      year: '2023',
      src: 'https://greenshop.ssenick.fun/',
      path: 'green-shop',
      images: { preview: GreenShopPreview },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, GSAP, Barba, lightgallery, Swiper',
   },
   {
      id: 4,
      name: 'Pizza',
      year: '2023',
      src: 'https://web-application-react-v2.ssenick.fun/',
      path: 'pizza',
      images: { preview: PizzaPreview },
      technologies: 'React, TypeScript, Redux Toolkit, React Router v6, Axios',
   },
   {
      id: 5,
      name: 'Weather',
      year: '2023',
      src: 'https://web-app-weather-typescript.ssenick.fun/',
      path: 'weather',
      images: { preview: WeatherPreview },
      technologies: 'React, TypeScript,Open Weather API, Axios',
   },
   {
      id: 6,
      name: 'Portfolio',
      year: '2023',
      src: 'https://portfolio.ssenick.fun/',
      path: 'portfolio',
      images: { preview: PortfolioPreview },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp',
   },
   {
      id: 7,
      name: 'Gamesportbet',
      year: '2022',
      src: 'https://gamesportbet.ssenick.fun/',
      path: 'gamesportbet',
      images: { preview: GameSportBetPreview },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 8,
      name: 'Foodrate',
      year: '2022',
      src: 'https://foodrate.ssenick.fun/',
      path: 'foodrate',
      images: { preview: FoodRatePreview },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 9,
      name: 'BackMyMoney',
      year: '2022',
      src: 'https://backmymoney.ssenick.fun/',
      path: 'backmymoney',
      images: { preview: BackMyMoneyPreview },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 1010,
      name: 'Eurotext',
      year: '2022',
      src: 'https://eurotex.ssenick.fun/',
      path: 'eurotext',
      images: { preview: EurotexPreview },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 10,
      name: 'Statika',
      year: '2022',
      src: 'https://statika.ssenick.fun/',
      path: 'statika',
      images: { preview: StatikarPreview },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 11,
      name: 'Gart',
      year: '2021',
      src: 'https://gart.ssenick.fun/',
      path: 'gart',
      images: { preview: GartPreview },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 12,
      name: 'Help',
      year: '2021',
      src: 'https://help.ssenick.fun/',
      path: 'help',
      images: { preview: HelpPreview },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 13,
      name: 'Funny doctor',
      year: '2021',
      src: 'https://family-doctor.ssenick.fun/',
      path: 'funny-doctor',
      images: { preview: FunnyDoctorPreview },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 14,
      name: 'Honey',
      year: '2021',
      src: 'https://honey.ssenick.fun/',
      path: 'honey',
      images: { preview: HoneyPreview },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 15,
      name: 'Vignette',
      year: '2021',
      src: 'https://vignette.ssenick.fun/',
      path: 'vignette',
      images: { preview: VignettePreview },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
];
