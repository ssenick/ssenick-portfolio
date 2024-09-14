import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Page } from '@/components/Page/Page';
import { projects } from '@/content/projects.ts';
import { classNames } from '@/helpers/classNames/classNames';
import { NotFoundPage } from '@/pages/NotFoundPage';

import { ProjectDevices } from '../ProjectDevices/ProjectDevices.tsx';
import { ProjectHeader } from '../ProjectHeader/ProjectHeader.tsx';
import cls from './ProjectPage.module.scss';

interface ProjectPageProps {
   className?: string;
}

const ProjectPage = (props: ProjectPageProps) => {
   const { className } = props;
   const { name } = useParams<{ name: string }>();
   // Состояние для отсроченного удаления проекта
   const [project] = useState(() => projects.find((item) => item.path === name));

   if (!project) {
      return <NotFoundPage />;
   }

   return (
      <Page className={classNames(cls.ProjectPage, {}, [className])}>
         <div className={cls.wrapper}>
            <ProjectHeader className={cls.container} project={project} />
         </div>
         <ProjectDevices project={project} />
         <div style={{ height: '300vh' }}></div>
      </Page>
   );
};

ProjectPage.displayName = 'ProjectPage';
export default ProjectPage;
