import { memo } from 'react';

import { classNames } from '@/helpers/classNames/classNames';

import cls from './Title.module.scss';
interface TitleProps {
   className?: string;
   children?: string;
}

const Title = memo((props: TitleProps) => {
   const { className, children } = props;

   return <h5 className={classNames(cls.Title, {}, [className])}>{children}</h5>;
});

Title.displayName = 'Title';
export { Title };
