import { memo } from 'react';

import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';

import cls from './NavHome.module.scss';

interface NavHomeProps {
   className?: string;
}

const NavHome = memo((props: NavHomeProps) => {
   const { className } = props;

   return (
      <FramerMagnetic>
         <div className={classNames(cls.NavHome, {}, [className])}>
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
         </div>
      </FramerMagnetic>
   );
});

NavHome.displayName = 'NavHome';
export { NavHome };
