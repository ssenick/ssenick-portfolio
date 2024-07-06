import { classNames } from '@/helpers/classNames/classNames';
import { Footer } from '@/Layout/Footer/ui/Footer/Footer';

import { HomeFirstScreen } from '../HomeFirstScreen/HomeFirstScreen';
import cls from './HomePage.module.scss';

interface HomePageProps {
   className?: string;
}

const HomePage = (props: HomePageProps) => {
   const { className } = props;

   return (
      <div className={classNames(cls.HomePage, {}, [className])}>
         <HomeFirstScreen />

         <div style={{ backgroundColor: '#fff', height: '100vh', position: 'relative', zIndex: '2' }}></div>
         <Footer />
      </div>
   );
};

HomePage.displayName = 'HomePage';
export default HomePage;
