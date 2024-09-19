import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Page } from '@/components/Page/Page';
import { ParallaxImagesGroupSliders } from '@/components/ParallaxImagesGroupSliders/ParallaxImagesGroupSliders.tsx';
import { projects } from '@/content/projects.ts';
import { classNames } from '@/helpers/classNames/classNames';
import { NotFoundPage } from '@/pages/NotFoundPage';

import { ProjectDevices } from '../ProjectDevices/ProjectDevices.tsx';
import { ProjectHeader } from '../ProjectHeader/ProjectHeader.tsx';
import { ProjectLaptop } from '../ProjectLaptop/ProjectLaptop.tsx';
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

   const laptopImages = project?.images?.devices?.laptop;
   const mainImages = project?.images?.devices?.tablet;
   const mobileImages = project?.images?.devices?.mobile;
   const slidersImages = project?.images?.sliders;

   return (
      <Page className={classNames(cls.ProjectPage, {}, [className])}>
         <ProjectHeader project={project} />
         <ProjectLaptop images={laptopImages} className={cls.laptop} />
         <ProjectDevices className={cls.bgGreen} images={mobileImages} />
         <ProjectLaptop className={cls.bgOrange} images={mainImages} tablet />
         <ParallaxImagesGroupSliders slidersImages={slidersImages} />
      </Page>
   );
};

ProjectPage.displayName = 'ProjectPage';
export default ProjectPage;
