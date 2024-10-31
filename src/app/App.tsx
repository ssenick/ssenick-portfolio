import './styles/index.scss';

import { Suspense } from 'react';

import { classNames } from '@/helpers/classNames/classNames';
import { AppRouter } from '@/poviders/Router';
function App() {
   return (
      <div className={classNames('app', {}, [])}>
         <Suspense fallback={''}>
            <AppRouter />
         </Suspense>
      </div>
   );
}

export default App;
