import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getRouteProject } from '@/config/route/routeConfig';
import { classNames } from '@/helpers/classNames/classNames';
import type { projectType } from '@/types/projectsItems';

import type { animateModalType } from '../../model/types';
import { AnimateListItem } from '../AnimateListItem/AnimateListItem';
import { AnimateModal } from '../AnimateModal/AnimateModal';
import cls from './AnimateList.module.scss';

interface WorkListProps {
   className?: string;
   links: projectType[];
   header?: boolean;
   full?: boolean;
}

//  перенести весь конент в отдельный файлн

const AnimateList = memo((props: WorkListProps) => {
   const { className, links, header, full } = props;
   const { t } = useTranslation();
   const [modal, setModal] = useState<animateModalType>({ active: false, index: 0 });

   return (
      <ul className={classNames(cls.AnimateList, {}, [className])}>
         {header && (
            <li className={cls.row}>
               <div className={classNames(cls.link, { [cls.full]: full }, [])}>
                  <p>{t('Name')}</p>
                  {full && <p className={cls.technologies}>{t('Technologies')}</p>}
                  <p>{t('Year')}</p>
               </div>
            </li>
         )}
         {links.map((item, i) => (
            <AnimateListItem
               key={item.id + item.name}
               content={item}
               setModal={setModal}
               index={i}
               path={getRouteProject(item.path)}
               full={full}
            />
         ))}
         <AnimateModal modal={modal} links={links} />
      </ul>
   );
});

AnimateList.displayName = 'AnimateList';
export { AnimateList };
