import { motion } from 'framer-motion';

import { pageEaseOut } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';
import { animatePattern } from '@/helpers/func/animatePattern';
import { Footer } from '@/Layout';
import { HomeGallery } from '@/pages/HomePage/ui/HomeGallery/HomeGallery';
import { HomeList } from '@/pages/HomePage/ui/HomeList/HomeList';

import { HomeAbout } from '../HomeAbout/HomeAbout';
import { HomeFirstScreen } from '../HomeFirstScreen/HomeFirstScreen';
import cls from './HomePage.module.scss';

interface HomePageProps {
   className?: string;
}

const HomePage = (props: HomePageProps) => {
   const { className } = props;

   return (
      <motion.div className={classNames(cls.HomePage, {}, [className])} {...animatePattern(pageEaseOut)}>
         <HomeFirstScreen />
         <HomeAbout />
         <HomeList />
         <HomeGallery />
         <Footer />
      </motion.div>
   );
};

HomePage.displayName = 'HomePage';
export default HomePage;
