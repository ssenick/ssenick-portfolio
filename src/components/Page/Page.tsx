import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { memo } from 'react';

import { pageEaseOut } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';
import { animatePattern } from '@/helpers/func/animatePattern';
import { Header } from '@/Layout';
import { Footer } from '@/Layout';
interface PageProps extends PropsWithChildren {
   className?: string;
}
import cls from './Page.module.scss';
const Page = memo((props: PageProps) => {
   const { className, children } = props;

   return (
      <motion.div className={classNames(cls.Page, {}, [className])} {...animatePattern(pageEaseOut)}>
         <Header />
         {children}
         <Footer />
      </motion.div>
   );
});

Page.displayName = 'Page';
export { Page };
