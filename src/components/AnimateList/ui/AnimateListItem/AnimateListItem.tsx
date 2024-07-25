import { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { getRouteWork } from '@/config/route/routeConfig';
import { classNames } from '@/helpers/classNames/classNames';

import type { animateListItemsType } from '../../model/types';
import cls from './AnimateListItem.module.scss';

interface AnimateListItemProps {
   className?: string;
   content: animateListItemsType;
   setModal: ({ active: boolean, index: number }) => void;
   index: number;
}

const AnimateListItem = memo((props: AnimateListItemProps) => {
   const { className, content, setModal, index } = props;

   const handleMouseEnter = useCallback(
      (i: number) => () => {
         setModal({ active: true, index: i });
      },
      [setModal],
   );
   const handleMouseLeave = useCallback(
      (i: number) => () => {
         setModal({ active: false, index: i });
      },
      [setModal],
   );
   return (
      <li
         onMouseEnter={handleMouseEnter(index)}
         onMouseLeave={handleMouseLeave(index)}
         className={classNames(cls.item, {}, [className])}
      >
         <div className={cls.line}></div>
         <Link to={getRouteWork()} className={cls.link}>
            <p className={cls.name}>{content.name}</p>
            <p>{content.year}</p>
            <div className={cls.bg}></div>
         </Link>
      </li>
   );
});

AnimateListItem.displayName = 'AnimateListItem';
export { AnimateListItem };
