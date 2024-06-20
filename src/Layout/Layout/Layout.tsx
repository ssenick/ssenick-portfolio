import type { PropsWithChildren } from 'react';
import { memo } from 'react';

import { Header } from '@/Layout';

import cls from './Layout.module.scss';

interface LayoutProps extends PropsWithChildren {
   className?: string;
}

const Layout = memo((props: LayoutProps) => {
   const { children } = props;
   return (
      <div className={cls.Layout}>
         <Header />
         {children}
      </div>
   );
});

Layout.displayName = 'Layout';
export { Layout };
