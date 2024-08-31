import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { AnimateList } from '@/components/AnimateList';
import { AppButton } from '@/components/UI/AppButton/AppButton';
import { Title } from '@/components/UI/Title/Title';
import { getRouteWork } from '@/config/route/routeConfig';
import { projects } from '@/content/projects';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './HomeList.module.scss';

interface HomeListProps {
   className?: string;
}

const HomeList = memo((props: HomeListProps) => {
   const { className } = props;
   const { t } = useTranslation('page');
   return (
      <div className={classNames(cls.HomeList, {}, [className])}>
         <div className={cls.header}>
            <Title notPadding>{t('Home list title')}</Title>
         </div>
         <AnimateList links={projects.slice(0, 3)} />
         <div className={cls.footer}>
            <AppButton>
               <Link to={getRouteWork()}>{t('More works')}</Link>
            </AppButton>
         </div>
      </div>
   );
});

HomeList.displayName = 'HomeList';
export { HomeList };
