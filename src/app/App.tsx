import './styles/index.scss';

import { Suspense, useEffect } from 'react';

import { AppRouter } from '@/app/povaiders/Router';
import { Header } from '@/components/Header';
import { classNames } from '@/helpers/classNames/classNames';
import { fixHeight } from '@/helpers/func/fixHeight';
import { useMediaQueryValues } from '@/hooks/useMediaQueryValues';

function App() {
   const { isMobile } = useMediaQueryValues();

   useEffect(() => {
      if (isMobile) {
         fixHeight();
      }
   }, [isMobile]);

   return (
      <div className={classNames('app', { mobile: isMobile }, [])}>
         <Suspense fallback={''}>
            <Header className={'app__header'} />
            <AppRouter className={'app__main'} />
         </Suspense>
      </div>
   );
}

export default App;
