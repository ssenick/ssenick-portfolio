import type { PropsWithChildren } from 'react';
import { memo, useRef } from 'react';

import { classNames } from '@/helpers/classNames/classNames';

import cls from './BlockWithTitle.module.scss';

interface BlockWithTitleProps extends PropsWithChildren {
   className?: string;
   title?: string;
}

const BlockWithTitle = memo((props: BlockWithTitleProps) => {
   const { className, title, children } = props;
   const containerRef = useRef<HTMLDivElement | null>(null);

   return (
      <div ref={containerRef} className={classNames(cls.BlockWithTitle, {}, [className])}>
         {title && <h2 className={cls.title}>{title}</h2>}
         {children}
      </div>
   );
});

BlockWithTitle.displayName = 'BlockWithTitle';
export { BlockWithTitle };
