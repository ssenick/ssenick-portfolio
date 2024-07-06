import './styles/index.scss';

import { useLocation } from 'react-router-dom';

import { PageTransition } from '@/app/poviders/PageTransition';
import { AppRouter } from '@/app/poviders/Router';
import { classNames } from '@/helpers/classNames/classNames';

function App() {
   const location = useLocation();

   return (
      <div className={classNames('app', {}, [])}>
         <PageTransition location={location}>
            <AppRouter location={location} />
         </PageTransition>
      </div>
   );
}

export default App;
