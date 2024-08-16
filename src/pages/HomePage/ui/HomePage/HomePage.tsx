import { motion } from 'framer-motion';
import { useEffect } from 'react';

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

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <motion.div className={classNames(cls.HomePage, {}, [className])} {...animatePattern(pageEaseOut)}>
         <HomeFirstScreen />
         <main>
            <HomeAbout />
            <HomeList />
            <HomeGallery />
         </main>
         <Footer />
      </motion.div>
   );
};

HomePage.displayName = 'HomePage';
export default HomePage;
