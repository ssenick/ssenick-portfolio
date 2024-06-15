import { memo } from 'react';
import { Link } from 'react-router-dom';

import { getRouteHome } from '@/config/route/routeConfig';
import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';

import cls from './NavToHome.module.scss';

interface NavHomeProps {
   className?: string;
}

const NavToHome = memo((props: NavHomeProps) => {
   const { className } = props;

   return (
      <FramerMagnetic>
         <Link to={getRouteHome()} className={classNames(cls.NavToHome, {}, [className])}>
            <div className={cls.credit}>©</div>
            <div className={cls.text}>
               <div className={cls.wrapper}>
                  <h5 className={cls.code}>Code by</h5>
                  <span className={cls.name}>
                     <h5>Ruslan</h5>
                     <h5>Senchenko</h5>
                  </span>
               </div>
            </div>
         </Link>
      </FramerMagnetic>
   );
});

NavToHome.displayName = 'NavToHome';
export { NavToHome };
