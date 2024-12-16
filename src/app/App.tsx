import './styles/index.scss';

import { Suspense, useEffect } from 'react';
import ReactGA from 'react-ga4';

import { classNames } from '@/helpers/classNames/classNames';
import { AppRouter } from '@/poviders/Router';
function App() {
   useEffect(() => {
      ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_KEY);
   }, []);

   return (
      <div className={classNames('app', {}, [])}>
         <Suspense fallback={''}>
            <AppRouter />
         </Suspense>
      </div>
   );
}

export default App;
