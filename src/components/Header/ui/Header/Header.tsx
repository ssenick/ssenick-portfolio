import { memo } from 'react';
import { Link } from 'react-router-dom';

import { getRouteAbout, getRouteHome } from '@/config/route/routeConfig';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './Header.module.scss';

interface HeaderProps {
   className?: string;
}

const Header = memo((props: HeaderProps) => {
   const { className } = props;
   return (
      <div className={classNames(cls.Header, {}, [className])}>
         <ul>
            <li>
               <Link className={cls.link} to={getRouteHome()}>
                  Home
               </Link>
            </li>
            <li>
               <Link className={cls.link} to={getRouteAbout()}>
                  About
               </Link>
            </li>
         </ul>
      </div>
   );
});

Header.displayName = 'Header';
export { Header };
