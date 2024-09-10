import type { ReactNode } from 'react';
import { memo } from 'react';

import { classNames } from '@/helpers/classNames/classNames';

import cls from './Title.module.scss';
interface TitleProps {
   className?: string;
   children?: ReactNode;
   notPadding?: boolean;
   borderBottom?: boolean;
   smallSize?: boolean;
}

const Title = memo((props: TitleProps) => {
   const { className, children, notPadding, borderBottom, smallSize } = props;

   return (
      <h5
         className={classNames(
            cls.Title,
            { [cls.notPadding]: notPadding, [cls.borderBottom]: borderBottom, [cls.smallSize]: smallSize },
            [className],
         )}
      >
         {children}
      </h5>
   );
});

Title.displayName = 'Title';
export { Title };
