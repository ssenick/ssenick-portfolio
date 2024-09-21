import { useTranslation } from 'react-i18next';

import { AnimateList } from '@/components/AnimateList';
import { Page } from '@/components/Page/Page';
import { projects } from '@/content/projects/projects.ts';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './WorkPage.module.scss';

interface WorkPageProps {
   className?: string;
}

const WorkPage = (props: WorkPageProps) => {
   const { className } = props;
   const { t } = useTranslation('work');
   return (
      <Page className={classNames(cls.WorkPage, {}, [className])}>
         <div className={cls.wrapper}>
            <h1 className={cls.title}>{t('title')}</h1>
            <AnimateList links={projects} header full />
         </div>
      </Page>
   );
};

WorkPage.displayName = 'WorkPage';
export default WorkPage;
