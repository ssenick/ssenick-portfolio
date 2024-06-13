import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';

import { NavLinks } from '../../const/NavLinks';
import cls from './Nav.module.scss';

interface NavProps {
   className?: string;
}

const Nav = memo((props: NavProps) => {
   const { className } = props;
   const location = useLocation();

   return (
      <div className={classNames(cls.Nav, {}, [className])}>
         <nav>
            <ul className={cls.list}>
               {NavLinks.map(({ path, text }) => (
                  <li key={path}>
                     <FramerMagnetic>
                        <Link
                           className={classNames(cls.link, { [cls.active]: location.pathname === path }, [])}
                           to={path}
                        >
                           {text}

                           <span className={cls.dot}></span>
                        </Link>
                     </FramerMagnetic>
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   );
});

Nav.displayName = 'Nav';
export { Nav };
