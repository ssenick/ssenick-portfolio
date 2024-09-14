// Admin
import AdminPreview from '@/assets/projects/admin/admin-small.webp';
import AdminLaptop from '@/assets/projects/admin/laptop.png';
// BackMyMoney
import BackMyMoneyPreview from '@/assets/projects/backmymoney/backmymoney-small.webp';
import BackMyMoneyLaptop from '@/assets/projects/backmymoney/laptop.png';
//Blog
import BlogPreview from '@/assets/projects/blog/blog-small.webp';
import BlogLaptop from '@/assets/projects/blog/laptop.webp';
import BlogMobile1 from '@/assets/projects/blog/mobile1.webp';
import BlogMobile2 from '@/assets/projects/blog/mobile2.webp';
import BlogMobile3 from '@/assets/projects/blog/mobile3.webp';
//Eurotex
import EurotexPreview from '@/assets/projects/eurotex/eurotex-small.webp';
import EurotexLaptop from '@/assets/projects/eurotex/laptop.png';
// FoodRate
import FoodRatePreview from '@/assets/projects/foodrate/foodrate-small.webp';
import FoodRateLaptop from '@/assets/projects/foodrate/laptop.png';
// FamilyDoctor
import FunnyDoctorPreview from '@/assets/projects/funny-doctor/funny-doctor-small.webp';
import FunnyDoctorLaptop from '@/assets/projects/funny-doctor/laptop.png';
// Gart
import GartPreview from '@/assets/projects/gart/gart-small.webp';
import GartLaptop from '@/assets/projects/gart/laptop.png';
// GreenShop
import GreenShopPreview from '@/assets/projects/greenshop/greenshop-small.webp';
import GreenShopLaptop from '@/assets/projects/greenshop/laptop.png';
// Help
import HelpPreview from '@/assets/projects/help/help-small.webp';
import HelpLaptop from '@/assets/projects/help/laptop.png';
// Honey
import HoneyPreview from '@/assets/projects/honey/honey-small.webp';
import HoneyLaptop from '@/assets/projects/honey/laptop.png';
// Pizza
import PizzaLaptop from '@/assets/projects/pizza/laptop.png';
import PizzaPreview from '@/assets/projects/pizza/pizza-small.webp';
// Portfolio
import PortfolioLaptop from '@/assets/projects/portfolio/laptop.png';
import PortfolioPreview from '@/assets/projects/portfolio/portfolio-small.webp';
// GameSportBet
import GameSportBetPreview from '@/assets/projects/sportbet/gamesport-small.webp';
import GameSportBetLaptop from '@/assets/projects/sportbet/laptop.png';
// Statika
import StatikaLaptop from '@/assets/projects/statika/laptop.png';
import StatikaPreview from '@/assets/projects/statika/statika-small.webp';
// Vignette
import VignetteLaptop from '@/assets/projects/vignette/laptop.png';
import VignettePreview from '@/assets/projects/vignette/vignette-small.webp';
// Weather
import WeatherLaptop from '@/assets/projects/weather/laptop.png';
import WeatherPreview from '@/assets/projects/weather/weather-small.webp';
import type { projectType } from '@/types/projectsItems';

export const projects: projectType[] = [
   {
      id: 1,
      name: 'Blog',
      year: '2024',
      location: 'Canada',
      role: 'Frontend Developer',
      projectURL: 'https://dulcet-pudding-009166.netlify.app',
      gitURL: 'https://github.com/ssenick/web-mini-project',
      path: 'blog',
      images: {
         preview: BlogPreview,
         devices: { laptop: BlogLaptop, mobile: [BlogMobile1, BlogMobile2, BlogMobile3] },
      },
      technologies:
         'React, React Router, Redux toolkit, TypeScript, ' +
         'Webpack, Vite, Storybook, Jest, Loki, i18next, Axios, Swiper',
   },
   {
      id: 2,
      name: 'Admin-panel',
      year: '2024',
      location: 'Canada',
      role: 'Frontend Developer',
      projectURL: 'https://web-react-admin.ssenick.fun',
      gitURL: 'https://github.com/ssenick/web-react-admin',
      path: 'admin-panel',
      images: { preview: AdminPreview, devices: { laptop: AdminLaptop } },
      technologies:
         'React, React Router, Axios,React pro sidebar, Material UI, Fullcalendar, Formik, Yup, Nivo',
   },
   {
      id: 3,
      name: 'Green-shop',
      year: '2023',
      location: 'Canada',
      role: 'Website Layout Developer',
      projectURL: 'https://greenshop.ssenick.fun/',
      gitURL: 'https://github.com/ssenick/greenshop',
      path: 'green-shop',
      images: { preview: GreenShopPreview, devices: { laptop: GreenShopLaptop } },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, GSAP, Barba, lightgallery, Swiper',
   },
   {
      id: 4,
      name: 'Pizza',
      year: '2023',
      location: 'Canada',
      role: 'Frontend Developer',
      projectURL: 'https://web-application-react-v2.ssenick.fun/',
      gitURL: 'https://github.com/ssenick/web-application-pizza-v2',
      path: 'pizza',
      images: { preview: PizzaPreview, devices: { laptop: PizzaLaptop } },
      technologies: 'React, TypeScript, Redux Toolkit, React Router v6, Axios',
   },
   {
      id: 5,
      name: 'Weather',
      year: '2023',
      location: 'Slovakia',
      role: 'Frontend Developer',
      projectURL: 'https://web-app-weather-typescript.ssenick.fun/',
      gitURL: 'https://github.com/ssenick/web-app-weather-typescript',
      path: 'weather',
      images: { preview: WeatherPreview, devices: { laptop: WeatherLaptop } },
      technologies: 'React, TypeScript,Open Weather API, Axios',
   },
   {
      id: 6,
      name: 'Portfolio',
      year: '2023',
      location: 'Ukraine',
      role: 'Website Layout Developer',
      projectURL: 'https://portfolio.ssenick.fun/',
      gitURL: 'https://github.com/ssenick/dark-portfolio',
      path: 'portfolio',
      images: { preview: PortfolioPreview, devices: { laptop: PortfolioLaptop } },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp',
   },
   {
      id: 7,
      name: 'Gamesportbet',
      year: '2022',
      location: 'Belarus',
      role: 'Website Layout Developer',
      projectURL: 'https://gamesportbet.ssenick.fun/',
      gitURL: 'https://github.com/ssenick/GameSportBet',
      path: 'gamesportbet',
      images: { preview: GameSportBetPreview, devices: { laptop: GameSportBetLaptop } },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 8,
      name: 'Foodrate',
      year: '2022',
      location: 'Belarus',
      role: 'Website Layout Developer',
      projectURL: 'https://foodrate.ssenick.fun/',
      gitURL: 'https://github.com/ssenick/FoodRate',
      path: 'foodrate',
      images: { preview: FoodRatePreview, devices: { laptop: FoodRateLaptop } },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 9,
      name: 'BackMyMoney',
      year: '2022',
      location: 'Belarus',
      role: 'Website Layout Developer',
      projectURL: 'https://backmymoney.ssenick.fun/',
      gitURL: 'https://github.com/ssenick/backmymoney',
      path: 'backmymoney',
      images: { preview: BackMyMoneyPreview, devices: { laptop: BackMyMoneyLaptop } },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 1010,
      name: 'Eurotext',
      year: '2022',
      location: 'Canada',
      role: 'Website Layout Developer',
      projectURL: 'https://eurotex.ssenick.fun/',
      path: 'eurotext',
      images: { preview: EurotexPreview, devices: { laptop: EurotexLaptop } },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 10,
      name: 'Statika',
      year: '2022',
      location: 'Slovakia',
      role: 'Website Layout Developer',
      projectURL: 'https://statika.ssenick.fun/',
      gitURL: 'https://github.com/ssenick/statika',
      path: 'statika',
      images: { preview: StatikaPreview, devices: { laptop: StatikaLaptop } },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 11,
      name: 'Gart',
      year: '2021',
      location: 'Russia',
      role: 'Website Layout Developer',
      projectURL: 'https://gart.ssenick.fun/',
      gitURL: 'https://github.com/ssenick/GART',
      path: 'gart',
      images: { preview: GartPreview, devices: { laptop: GartLaptop } },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 12,
      name: 'Help',
      year: '2021',
      location: 'Russia',
      role: 'Website Layout Developer',
      projectURL: 'https://help.ssenick.fun/',
      gitURL: 'https://github.com/ssenick/help',
      path: 'help',
      images: { preview: HelpPreview, devices: { laptop: HelpLaptop } },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 13,
      name: 'Family doctor',
      year: '2021',
      location: 'Russia',
      role: 'Website Layout Developer',
      projectURL: 'https://family-doctor.ssenick.fun/',
      gitURL: 'https://github.com/ssenick/family-doctor',
      path: 'family-doctor',
      images: { preview: FunnyDoctorPreview, devices: { laptop: FunnyDoctorLaptop } },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 14,
      name: 'Honey',
      year: '2021',
      location: 'Ukraine',
      role: 'Website Layout Developer',
      projectURL: 'https://honey.ssenick.fun/',
      gitURL: 'https://github.com/ssenick/honey',
      path: 'honey',
      images: { preview: HoneyPreview, devices: { laptop: HoneyLaptop } },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
   {
      id: 15,
      name: 'Vignette',
      year: '2021',
      location: 'Hungary',
      role: 'Website Layout Developer',
      projectURL: 'https://vignette.ssenick.fun/',
      gitURL: 'https://github.com/ssenick/vignette',
      path: 'vignette',
      images: { preview: VignettePreview, devices: { laptop: VignetteLaptop } },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
];
