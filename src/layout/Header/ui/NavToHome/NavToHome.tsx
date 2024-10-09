import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { getRouteHome } from '@/config/route/routeConfig';
import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';

import cls from './NavToHome.module.scss';

const NavToHome = memo(() => {
   const { t } = useTranslation();
   return (
      <FramerMagnetic>
         <Link to={getRouteHome()} className={classNames(cls.NavToHome, {}, [])}>
            <div className={cls.credit}>©</div>
            <div className={cls.text}>
               <div className={cls.wrapper}>
                  {/* eslint-disable i18next/no-literal-string */}
                  <h5 className={cls.code}>Code by</h5>
                  <span className={cls.name}>
                     <h5>{t('Ruslan')}</h5>
                     <h5>{t('Senchenko')}</h5>
                  </span>
               </div>
            </div>
         </Link>
      </FramerMagnetic>
   );
});

NavToHome.displayName = 'NavToHome';
export { NavToHome };
