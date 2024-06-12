import { memo } from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '@/app/poviders/ThemeProvider';
import { getRouteAbout, getRouteHome } from '@/config/route/routeConfig';
import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';

import cls from './Header.module.scss';

interface HeaderProps {
   className?: string;
}

const Header = memo((props: HeaderProps) => {
   const { className } = props;
   const { toggleTheme } = useTheme();

   return (
      <div className={classNames(cls.Header, {}, [className])}>
         <ul>
            <li>
               <FramerMagnetic>
                  <Link className={cls.link} to={getRouteHome()}>
                     Home
                  </Link>
               </FramerMagnetic>
            </li>
            <li>
               <FramerMagnetic>
                  <Link className={cls.link} to={getRouteAbout()}>
                     About
                  </Link>
               </FramerMagnetic>
            </li>
            <li>
               <button onClick={() => toggleTheme()}>asdasdsa</button>
            </li>
         </ul>
      </div>
   );
});

Header.displayName = 'Header';
export { Header };
