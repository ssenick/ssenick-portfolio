import { memo } from 'react';

import { classNames } from '@/helpers/classNames/classNames';

import { Nav } from '../Nav/Nav';
import cls from './Header.module.scss';

interface HeaderProps {
   className?: string;
}

const Header = memo((props: HeaderProps) => {
   const { className } = props;

   return (
      <div className={classNames(cls.Header, {}, [className])}>
         <div className={cls.wrapper}>
            <Nav />
         </div>
      </div>
   );
});

Header.displayName = 'Header';
export { Header };
