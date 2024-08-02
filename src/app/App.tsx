import './styles/index.scss';

import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import { classNames } from '@/helpers/classNames/classNames';
import { PageTransition } from '@/poviders/PageTransition';
import { AppRouter } from '@/poviders/Router';
function App() {
   const location = useLocation();

   return (
      <div className={classNames('app', {}, [])}>
         <Suspense fallback={''}>
            <PageTransition location={location}>
               <AppRouter location={location} />
            </PageTransition>
         </Suspense>
      </div>
   );
}

export default App;
