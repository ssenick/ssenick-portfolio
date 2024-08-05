import { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { classNames } from '@/helpers/classNames/classNames';
import type { projectType } from '@/types/projectsItems';

import type { animateModalType } from '../../model/types';
import cls from './AnimateListItem.module.scss';

interface AnimateListItemProps {
   className?: string;
   content: projectType;
   path: string;
   setModal: (props: animateModalType) => void;
   index: number;
}

const AnimateListItem = memo((props: AnimateListItemProps) => {
   const { className, content, setModal, index, path } = props;

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
         <Link to={path} className={cls.link}>
            <p className={cls.name}>{content.name}</p>
            <p>{content.year}</p>
         </Link>
      </li>
   );
});

AnimateListItem.displayName = 'AnimateListItem';
export { AnimateListItem };
