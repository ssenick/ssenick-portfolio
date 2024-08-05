import { useParams } from 'react-router-dom';

import { Page } from '@/components/Page/Page';
import { projects } from '@/content/projects';
import { classNames } from '@/helpers/classNames/classNames';
import { NotFoundPage } from '@/pages/NotFoundPage';

import cls from './ProjectPage.module.scss';

interface ProjectPageProps {
   className?: string;
}

const ProjectPage = (props: ProjectPageProps) => {
   const { className } = props;
   const { name } = useParams<{ name: string }>();

   const findName = projects.find((item) => item.path === name);
   if (!findName) {
      return <NotFoundPage />;
   }

   return (
      <Page className={classNames(cls.ProjectPage, {}, [className])}>
         <div>
            <div>BLog</div>
         </div>
      </Page>
   );
};

ProjectPage.displayName = 'ProjectPage';
export default ProjectPage;
