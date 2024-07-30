import './styles/index.scss';

import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import { PageTransition } from '@/app/poviders/PageTransition';
import { AppRouter } from '@/app/poviders/Router';
import { classNames } from '@/helpers/classNames/classNames';
function App() {
   const location = useLocation();

   return (
      <div className={classNames('app', {}, [])}>
         <Suspense fallback={'Loading...'}>
            <PageTransition location={location}>
               <AppRouter location={location} />
            </PageTransition>
         </Suspense>
      </div>
   );
}

export default App;
