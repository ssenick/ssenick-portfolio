import { memo, useState } from 'react';

import { classNames } from '@/helpers/classNames/classNames';
import { BurgerBtn } from '@/Layout/Header/ui/BurgerBtn/BurgerBtn';
import { NavAside } from '@/Layout/Header/ui/NavAside/NavAside/NavAside';

import { Nav } from '../Nav/Nav';
import { NavToHome } from '../NavToHome/NavToHome';
import cls from './Header.module.scss';

interface HeaderProps {
   className?: string;
}

const Header = memo((props: HeaderProps) => {
   const { className } = props;
   const [active, setActive] = useState(false);
   return (
      <div className={classNames(cls.Header, {}, [className])}>
         <nav className={cls.wrapper}>
            <NavToHome />
            <Nav />
            <BurgerBtn setActiveButton={setActive} activeButton={active} />
            <NavAside isActive={active} setIsActive={setActive} />
         </nav>
      </div>
   );
});

Header.displayName = 'Header';
export { Header };
