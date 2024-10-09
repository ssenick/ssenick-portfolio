import { memo, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { LangSwitcher } from '@/components/LangSwitcher/ui/LangSwitcher/LangSwitcher';
import { classNames } from '@/helpers/classNames/classNames';
import { MediaQueryContext } from '@/poviders/MediaQueryProvider';

import { BurgerBtn } from '../BurgerBtn/BurgerBtn';
import { MenuBtn } from '../MenuBtn/MenuBtn';
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
   return (
      <div className={classNames(cls.Header, {}, [className])}>
         <nav className={cls.wrapper}>
            <NavToHome />
            {isMobile ? (
               <MenuBtn className={cls.nav} setActiveButton={setActiveBurger} />
            ) : (
               <div className={cls.nav}>
                  <LangSwitcher />
                  <Nav location={location.pathname} />
               </div>
            )}

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
