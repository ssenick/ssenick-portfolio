import { useTheme } from '@/app/poviders/ThemeProvider';
import ImageFront from '@/assets/front.svg?react';
import ImageMe from '@/assets/me_3.png';
import { classNames } from '@/helpers/classNames/classNames';
import { useMediaQueryValues } from '@/hooks/useMediaQueryValues';
import { Header } from '@/Layout';
import { AppImage } from '@/UI/AppImage/AppImage';

import cls from './HomePage.module.scss';
interface HomePageProps {
   className?: string;
}

const HomePage = (props: HomePageProps) => {
   const { className } = props;
   const { isMobile } = useMediaQueryValues();

   const { theme } = useTheme();

   return (
      <div className={classNames(cls.HomePage, {}, [className])}>
         <div className={cls.firstScreen}>
            <Header />
            <ImageFront className={classNames(cls.svg, { [cls.dark]: theme === 'dark' }, [])} />
            <AppImage className={classNames(cls.image, { [cls.dark]: theme === 'dark' }, [])} src={ImageMe} />
            <div className={cls.wrapper}>
               <div className={cls.main}>
                  <h5>Ruslan Senchenko</h5>
                  <h1>Website and user interface designer</h1>
                  <h3>
                     Over the past 9 years, as an art director and designer, I’ve worked with big companies
                     and up-and-coming startups to successfully help them reach their full potential and
                     attract new customers.
                  </h3>
               </div>
            </div>
         </div>
         <div style={{ backgroundColor: 'red', height: '100vh' }}></div>
      </div>
   );
};

HomePage.displayName = 'HomePage';
export default HomePage;
