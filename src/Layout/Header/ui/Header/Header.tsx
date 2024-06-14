import { memo } from 'react';

import { classNames } from '@/helpers/classNames/classNames';

import { Nav } from '../Nav/Nav';
import { NavHome } from '../NavHome/NavHome';
import cls from './Header.module.scss';

interface HeaderProps {
   className?: string;
}

const Header = memo((props: HeaderProps) => {
   const { className } = props;

   return (
      <div className={classNames(cls.Header, {}, [className])}>
         <nav className={cls.wrapper}>
            <NavHome />
            <Nav />
         </nav>
      </div>
   );
});

Header.displayName = 'Header';
export { Header };
