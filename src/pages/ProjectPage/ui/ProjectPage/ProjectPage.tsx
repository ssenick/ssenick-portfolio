import { useParams } from 'react-router-dom';

import { Page } from '@/components/Page/Page';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './ProjectPage.module.scss';

interface ProjectPageProps {
   className?: string;
}

const ProjectPage = (props: ProjectPageProps) => {
   const { className } = props;
   const { name } = useParams<{ name: string }>();

   // const findName = projects.find((item) => item.path === name);

   return (
      <Page className={classNames(cls.ProjectPage, {}, [className])}>
         <div>
            <div>{name}</div>
         </div>
      </Page>
   );
};

ProjectPage.displayName = 'ProjectPage';
export default ProjectPage;
