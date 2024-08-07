import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';

import { navLinks } from '../../const/navLinks';
import cls from './Nav.module.scss';

interface NavProps {
   className?: string;
   location: string;
}

const Nav = memo((props: NavProps) => {
   const { className, location } = props;
   const { t } = useTranslation();
   return (
      <div className={classNames(cls.Nav, {}, [className])}>
         <ul className={cls.list}>
            {navLinks.map(({ path, text }) =>
               path !== '/' ? (
                  <li key={path}>
                     <FramerMagnetic>
                        <Link
                           className={classNames(cls.link, { [cls.active]: location === path }, [])}
                           to={path}
                        >
                           {t(text)}
                           <span className={cls.dot}></span>
                        </Link>
                     </FramerMagnetic>
                  </li>
               ) : null,
            )}
         </ul>
      </div>
   );
});

Nav.displayName = 'Nav';
export { Nav };
