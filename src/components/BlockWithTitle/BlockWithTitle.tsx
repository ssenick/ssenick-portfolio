import { motion, useInView } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { memo, useRef } from 'react';

import { moveToTop } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './BlockWithTitle.module.scss';

interface BlockWithTitleProps extends PropsWithChildren {
   className?: string;
   title?: string;
}

const BlockWithTitle = memo((props: BlockWithTitleProps) => {
   const { className, title, children } = props;
   const containerRef = useRef<HTMLDivElement | null>(null);

   const isInView = useInView(containerRef);
   return (
      <motion.div
         ref={containerRef}
         className={classNames(cls.BlockWithTitle, {}, [className])}
         variants={moveToTop}
         animate={isInView ? 'animate' : 'initial'}
      >
         {title && <h2 className={cls.title}>{title}</h2>}
         {children}
      </motion.div>
   );
});

BlockWithTitle.displayName = 'BlockWithTitle';
export { BlockWithTitle };
