import { memo, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { MediaQueryContext } from '@/app/poviders/MediaQueryProvider';
import { useTheme } from '@/app/poviders/ThemeProvider';
import { classNames } from '@/helpers/classNames/classNames';
import { MenuBtn } from '@/Layout/Header/ui/MenuBtn/MenuBtn';
import { AppButton } from '@/UI/AppButton/AppButton';

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
   const [isHiddenBurger, setIsHiddenBurger] = useState(false);
   const [activeBurger, setActiveBurger] = useState(false);
   const { isMobile } = useContext(MediaQueryContext);
   const location = useLocation();
   const { toggleTheme } = useTheme();
   return (
      <div className={classNames(cls.Header, {}, [className])}>
         <nav className={cls.wrapper}>
            <NavToHome />
            <AppButton onClick={() => toggleTheme()}>+</AppButton>
            {isMobile ? <MenuBtn setActiveButton={setActiveBurger} /> : <Nav location={location.pathname} />}
            <BurgerBtn
               activeButton={activeBurger}
               setActiveButton={setActiveBurger}
               hiddeBurger={isHiddenBurger}
               setHiddeBurgerButton={setIsHiddenBurger}
            />
            <NavAside
               location={location.pathname}
               setIsHiddenBurger={setIsHiddenBurger}
               isActive={activeBurger}
               setIsActive={setActiveBurger}
            />
         </nav>
      </div>
   );
});

Header.displayName = 'Header';
export { Header };
