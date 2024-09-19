// Admin
import AdminPreview from '@/assets/projects/admin/admin-small.webp';
import AdminLaptop from '@/assets/projects/admin/laptop.png';
// BackMyMoney
import BackMyMoneyPreview from '@/assets/projects/backmymoney/backmymoney-small.webp';
import BackMyMoneyLaptop from '@/assets/projects/backmymoney/laptop.png';
//Blog
import BlogLaptop from '@/assets/projects/blog/laptop/laptop.webp';
import BlogLaptopSmall from '@/assets/projects/blog/laptop/laptop_small.webp';
import BlogMobile1 from '@/assets/projects/blog/mobile/mobile_1.webp';
import BlogMobile1Small from '@/assets/projects/blog/mobile/mobile_1_small.webp';
import BlogMobile2 from '@/assets/projects/blog/mobile/mobile_2.webp';
import BlogMobile2Small from '@/assets/projects/blog/mobile/mobile_2_small.webp';
import BlogMobile3 from '@/assets/projects/blog/mobile/mobile_3.webp';
import BlogMobile3Small from '@/assets/projects/blog/mobile/mobile_3_small.webp';
import BlogPreview from '@/assets/projects/blog/preview.webp';
import BlogTablet from '@/assets/projects/blog/tablet/tablet.webp';
import BlogTabletSmall from '@/assets/projects/blog/tablet/tablet_small.webp';
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
         sliders: {
            first: ['', '', '', ''],
            second: ['', '', '', ''],
         },
         preview: BlogPreview,
         devices: {
            laptop: {
               small: BlogLaptopSmall,
               big: BlogLaptop,
            },
            tablet: {
               small: BlogTabletSmall,
               big: BlogTablet,
            },
            mobile: [
               { big: BlogMobile1, small: BlogMobile1Small },
               { big: BlogMobile2, small: BlogMobile2Small },
               { big: BlogMobile3, small: BlogMobile3Small },
            ],
         },
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
      images: {
         preview: AdminPreview,
         sliders: {
            first: ['', '', '', ''],
            second: ['', '', '', ''],
         },
         devices: {
            laptop: { small: '', big: AdminLaptop },
            tablet: {
               small: BlogTabletSmall,
               big: BlogTablet,
            },
            mobile: [],
         },
      },
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
      images: {
         preview: GreenShopPreview,
         sliders: {
            first: ['', '', '', ''],
            second: ['', '', '', ''],
         },
         devices: {
            laptop: { small: '', big: GreenShopLaptop },
            tablet: {
               small: BlogTabletSmall,
               big: BlogTablet,
            },
            mobile: [],
         },
      },
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
      images: {
         preview: PizzaPreview,
         sliders: {
            first: ['', '', '', ''],
            second: ['', '', '', ''],
         },
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
      images: {
         preview: WeatherPreview,
         sliders: {
            first: ['', '', '', ''],
            second: ['', '', '', ''],
         },
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
      images: {
         preview: PortfolioPreview,
         sliders: {
            first: ['', '', '', ''],
            second: ['', '', '', ''],
         },
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
      images: {
         preview: GameSportBetPreview,
         sliders: {
            first: ['', '', '', ''],
            second: ['', '', '', ''],
         },
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
      images: {
         preview: FoodRatePreview,
         sliders: {
            first: ['', '', '', ''],
            second: ['', '', '', ''],
         },
         devices: {
            laptop: { small: '', big: FoodRateLaptop },
            tablet: {
               small: BlogTabletSmall,
               big: BlogTablet,
            },
            mobile: [],
         },
      },
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
      images: {
         preview: BackMyMoneyPreview,
         sliders: {
            first: ['', '', '', ''],
            second: ['', '', '', ''],
         },
         devices: {
            laptop: { small: '', big: BackMyMoneyLaptop },
            tablet: {
               small: BlogTabletSmall,
               big: BlogTablet,
            },
            mobile: [],
         },
      },
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
      images: {
         preview: EurotexPreview,
         sliders: {
            first: ['', '', '', ''],
            second: ['', '', '', ''],
         },
         devices: {
            laptop: { small: '', big: EurotexLaptop },
            tablet: {
               small: BlogTabletSmall,
               big: BlogTablet,
            },
            mobile: [],
         },
      },
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
      images: {
         preview: StatikaPreview,
         sliders: {
            first: ['', '', '', ''],
            second: ['', '', '', ''],
         },
         devices: {
            laptop: { small: '', big: StatikaLaptop },
            tablet: {
               small: BlogTabletSmall,
               big: BlogTablet,
            },
            mobile: [],
         },
      },
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
      images: {
         preview: GartPreview,
         sliders: {
            first: ['', '', '', ''],
            second: ['', '', '', ''],
         },
         devices: {
            laptop: { small: '', big: GartLaptop },
            tablet: {
               small: BlogTabletSmall,
               big: BlogTablet,
            },
            mobile: [],
         },
      },
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
      images: {
         preview: HelpPreview,
         sliders: {
            first: ['', '', '', ''],
            second: ['', '', '', ''],
         },
         devices: {
            laptop: { small: '', big: HelpLaptop },
            tablet: {
               small: BlogTabletSmall,
               big: BlogTablet,
            },
            mobile: [],
         },
      },
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
      images: {
         preview: FunnyDoctorPreview,
         sliders: {
            first: ['', '', '', ''],
            second: ['', '', '', ''],
         },
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
      images: {
         preview: HoneyPreview,
         sliders: {
            first: ['', '', '', ''],
            second: ['', '', '', ''],
         },
         devices: {
            laptop: { small: '', big: HoneyLaptop },
            tablet: {
               small: BlogTabletSmall,
               big: BlogTablet,
            },
            mobile: [],
         },
      },
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
      images: {
         preview: VignettePreview,
         sliders: {
            first: ['', '', '', ''],
            second: ['', '', '', ''],
         },
         devices: {
            laptop: { small: '', big: VignetteLaptop },
            tablet: {
               small: BlogTabletSmall,
               big: BlogTablet,
            },
            mobile: [],
         },
      },
      technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
   },
];
