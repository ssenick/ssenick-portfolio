import { memo } from 'react';

import { useTheme } from '@/app/poviders/ThemeProvider';
import ImageFront from '@/assets/front.svg?react';
import ImageMe from '@/assets/me_3.png';
import { classNames } from '@/helpers/classNames/classNames';
import { useVhVariable } from '@/hooks/useVhVariable';
import { Header } from '@/Layout';
import { AppImage } from '@/UI/AppImage/AppImage';

import cls from './HomeFirstScreen.module.scss';

interface HomeFirstScreenProps {
   className?: string;
}

const HomeFirstScreen = memo((props: HomeFirstScreenProps) => {
   const { className } = props;
   const { theme } = useTheme();

   useVhVariable();

   return (
      <div className={classNames(cls.HomeFirstScreen, {}, [className])}>
         <Header />
         <ImageFront className={classNames(cls.svg, { [cls.dark]: theme === 'dark' }, [])} />
         <AppImage className={classNames(cls.image, { [cls.dark]: theme === 'dark' }, [])} src={ImageMe} />
         <div className={cls.wrapper}>
            <div className={cls.main}>
               <h5>Ruslan Senchenko</h5>
               <h1>Frontend Developer</h1>
               <h3>
                  Over the past 9 years, as an art director and designer, I’ve worked with big companies and
                  up-and-coming startups to successfully help them reach their full potential and attract new
                  customers.
               </h3>
            </div>
         </div>
      </div>
   );
});

HomeFirstScreen.displayName = 'HomeFirstScreen';
export { HomeFirstScreen };
