import { memo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { classNames } from '@/helpers/classNames/classNames';

import { BurgerBtn } from '../BurgerBtn/BurgerBtn';
import { Nav } from '../Nav/Nav';
import { NavAside } from '../NavAside/NavAside/NavAside';
import { NavToHome } from '../NavToHome/NavToHome';
import cls from './Header.module.scss';

interface HeaderProps {
   className?: string;
}

const Header = memo((props: HeaderProps) => {
   const { className } = props;
   const location = useLocation();
   const [activeBurger, setActiveBurger] = useState(false);

   return (
      <div className={classNames(cls.Header, {}, [className])}>
         <nav className={cls.wrapper}>
            <NavToHome />
            <Nav location={location.pathname} />
            <BurgerBtn setActiveButton={setActiveBurger} activeButton={activeBurger} />
            <NavAside location={location.pathname} isActive={activeBurger} setIsActive={setActiveBurger} />
         </nav>
      </div>
   );
});

Header.displayName = 'Header';
export { Header };
