import { motion } from 'framer-motion';

import { pageEaseOut } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';
import { animatePattern } from '@/helpers/func/animatePattern';
import { Footer } from '@/Layout';

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
         <Footer />
      </motion.div>
   );
};

HomePage.displayName = 'HomePage';
export default HomePage;
