import type { PropsWithChildren } from 'react';
import { memo } from 'react';

import { classNames } from '@/helpers/classNames/classNames';

import cls from './Page.module.scss';
interface PageProps extends PropsWithChildren {
   className?: string;
}

const Page = memo((props: PageProps) => {
   const { children, className } = props;
   window.addEventListener('scroll', () => console.log(1));
   return <div className={classNames(cls.Page, {}, [className])}>{children}</div>;
});

Page.displayName = 'Page';
export { Page };
