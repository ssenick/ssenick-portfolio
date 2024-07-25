import { memo, useState } from 'react';

import { classNames } from '@/helpers/classNames/classNames';

import type { animateListItemsType, animateModalType } from '../../model/types';
import { AnimateListItem } from '../AnimateListItem/AnimateListItem';
import { AnimateModal } from '../AnimateModal/AnimateModal';
import cls from './AnimateList.module.scss';

interface WorkListProps {
   className?: string;
   links: animateListItemsType[];
   notHeader?: boolean;
}

//  перенести весь конент в отдельный файлн

const AnimateList = memo((props: WorkListProps) => {
   const { className, links, notHeader } = props;
   const [modal, setModal] = useState<animateModalType>({ active: false, index: 0 });

   return (
      <ul className={classNames(cls.AnimateList, {}, [className])}>
         {!notHeader && (
            <li className={cls.row}>
               <div className={cls.link}>
                  <p>Name</p>
                  <p>Year</p>
               </div>
            </li>
         )}
         {links.map((item, i) => (
            <AnimateListItem key={i + item.name} content={item} setModal={setModal} index={i} />
         ))}
         <AnimateModal modal={modal} links={links} />
      </ul>
   );
});

AnimateList.displayName = 'AnimateList';
export { AnimateList };
