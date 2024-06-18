import type { PropsWithChildren } from 'react';
import { memo } from 'react';

import { Page } from '@/components/Page/Page';
import { Header } from '@/Layout';

interface LayoutProps extends PropsWithChildren {
   className?: string;
}

const Layout = memo((props: LayoutProps) => {
   const { children } = props;
   return (
      <Page>
         <Header />
         {children}
      </Page>
   );
});

Layout.displayName = 'Layout';
export { Layout };
