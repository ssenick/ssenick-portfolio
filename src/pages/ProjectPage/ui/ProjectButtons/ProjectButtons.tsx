import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Arrow from '@/assets/icons/arrow.svg?react';
import { AppButton } from '@/components/UI/AppButton/AppButton.tsx';
import { getRouteProject } from '@/config/route/routeConfig.tsx';
import { projects } from '@/content/projects/projects.ts';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './ProjectButtons.module.scss';

interface ProjectButtonsProps {
   className?: string;
   nameProject: string | undefined;
}

const ProjectButtons = memo((props: ProjectButtonsProps) => {
   const { className, nameProject } = props;
   const { t } = useTranslation('projectPage');
   const [currentIndex] = useState(projects.findIndex((project) => project.path === nameProject));
   const [nextProject] = useState(currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null);
   const [prevProject] = useState(currentIndex !== 0 ? projects[currentIndex - 1] : null);

   return (
      <div className={classNames(cls.ProjectButtons, {}, [className])}>
         <div className={cls.wrapper}>
            {prevProject && (
               <AppButton variant={'clear'}>
                  <Link
                     className={classNames(cls.link, {}, [cls.prev])}
                     to={getRouteProject(prevProject.path)}
                  >
                     <span>{t('previous project')}</span>
                     <Arrow className={cls.arrow} />
                  </Link>
               </AppButton>
            )}
            {nextProject && (
               <AppButton variant={'clear'}>
                  <Link className={cls.link} to={getRouteProject(nextProject.path)}>
                     <span>{t('next project')}</span>
                     <Arrow className={cls.arrow} />
                  </Link>
               </AppButton>
            )}
         </div>
      </div>
   );
});

ProjectButtons.displayName = 'ProjectButtons';
export { ProjectButtons };
