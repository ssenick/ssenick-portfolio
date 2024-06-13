import type { ReactNode } from 'react';
import { memo } from 'react';

import { classNames } from '@/helpers/classNames/classNames';
import { Header } from '@/Layout';

import cls from './Layout.module.scss';

interface LayoutProps {
   className?: string;
   children?: ReactNode;
}

const Layout = memo((props: LayoutProps) => {
   const { className, children } = props;

   return (
      <div className={classNames(cls.Layout, {}, [className])}>
         <Header />
         {children}
      </div>
   );
});

Layout.displayName = 'Layout';
export { Layout };
