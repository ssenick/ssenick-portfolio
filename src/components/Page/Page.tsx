import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';

import { pageEaseOut } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';
import { animatePattern } from '@/helpers/func/animatePattern';
import { Header } from '@/Layout';
import { Footer } from '@/Layout';

import cls from './Page.module.scss';

interface PageProps extends PropsWithChildren {
   className?: string;
}

const Page = (props: PageProps) => {
   const { className, children } = props;

   useEffect(() => {
      window.scrollTo(0, 0);
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
