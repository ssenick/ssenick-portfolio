import './styles/index.scss';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PageTransition } from '@/app/povaiders/PageTransition';
import { AppRouter } from '@/app/povaiders/Router';
import { classNames } from '@/helpers/classNames/classNames';
import { fixHeight } from '@/helpers/func/fixHeight';
import { useMediaQueryValues } from '@/hooks/useMediaQueryValues';
import { Layout } from '@/Layout';

function App() {
   const { isMobile } = useMediaQueryValues();
   const location = useLocation();

   useEffect(() => {
      if (isMobile) {
         fixHeight();
      }
   }, [isMobile]);

   return (
      <div className={classNames('app', { mobile: isMobile }, [])}>
         <PageTransition location={location}>
            <Layout>
               <AppRouter location={location} />
            </Layout>
         </PageTransition>
      </div>
   );
}

export default App;
