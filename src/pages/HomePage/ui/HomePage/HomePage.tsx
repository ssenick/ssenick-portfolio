import { useCallback, useState } from 'react';

import ReactImage from '@/assets/react.svg?react';
import ViteImage from '@/assets/vite.svg?react';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './HomePage.module.scss';

interface HomePageProps {
   className?: string;
}

const HomePage = (props: HomePageProps) => {
   const { className } = props;
   const [count, setCount] = useState(0);

   const addition = useCallback(() => {
      setCount((prevState) => ++prevState);
   }, []);
   const reset = useCallback(() => {
      setCount(0);
   }, []);

   return (
      <div className={classNames(cls.HomePage, {}, [className])}>
         <div className={cls.box}>
            <ReactImage className={classNames(cls.image, {}, [cls.react])} />
            <h1>HOME</h1>
            <ViteImage className={cls.image} />
         </div>

         <h2>{count}</h2>
         <div className={cls.wrapper}>
            <button onClick={addition}>+</button>
            <button onClick={reset}>reset</button>
         </div>
      </div>
   );
};

HomePage.displayName = 'HomePage';
export default HomePage;
