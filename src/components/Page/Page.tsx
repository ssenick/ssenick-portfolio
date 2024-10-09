import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';

import { pageEaseOut } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';
import { animatePattern } from '@/helpers/func/animatePattern';
import { Footer, Header } from '@/layout';

import cls from './Page.module.scss';

interface PageProps extends PropsWithChildren {
   className?: string;
}

const Page = (props: PageProps) => {
   const { className, children } = props;

   useEffect(() => {
      const timer = setTimeout(() => {
         window.scrollTo(0, 0);
      }, 300);
      return () => {
         clearTimeout(timer);
      };
   }, []);

   return (
      <motion.div className={classNames(cls.Page, {}, [className])} {...animatePattern(pageEaseOut)}>
         <Header />
         {children}
         <Footer />
      </motion.div>
   );
};

Page.displayName = 'Page';
export { Page };
