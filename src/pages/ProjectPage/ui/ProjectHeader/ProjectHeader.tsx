import { motion, useScroll, useTransform } from 'framer-motion';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { AppButton } from '@/components/UI/AppButton/AppButton.tsx';
import { Title } from '@/components/UI/Title/Title.tsx';
import { getRouteAbout } from '@/config/route/routeConfig.tsx';
import { classNames } from '@/helpers/classNames/classNames';
import type { projectType } from '@/types/projectsItems.ts';

import cls from './ProjectHeader.module.scss';

interface ProjectHeaderProps {
   className?: string;
   project: projectType;
}

const ProjectHeader = memo((props: ProjectHeaderProps) => {
   const { className, project } = props;
   const { t } = useTranslation('projectPage');
   const { scrollYProgress } = useScroll({
      offset: ['start end', 'end start'],
   });
   const valueMove = useTransform(scrollYProgress, [0, 1], ['100%', '-100%']);
   const valueMoveDown = useTransform(scrollYProgress, [0, 1], ['-100%', '100%']);

   return (
      <section className={classNames(cls.ProjectHeader, {}, [className])}>
         <h1 className={cls.title}>{project.name}</h1>
         <div className={cls.content}>
            <ul className={cls.list}>
               <li className={cls.listItem}>
                  <Title borderBottom smallSize>
                     {t('my role')}
                  </Title>
                  <span>{project.role}</span>
               </li>
               <li className={cls.listItem}>
                  <Title borderBottom smallSize>
                     {t('location and year')}
                  </Title>
                  <span>
                     {project.location} © {project.year}
                  </span>
               </li>
               <li className={cls.listItem}>
                  <Title borderBottom smallSize>
                     {t('technologies')}
                  </Title>
                  <span>{project.technologies}</span>
               </li>
            </ul>
            <div className={cls.buttons}>
               <motion.div style={{ y: valueMove }} className={cls.btn}>
                  <AppButton variant={'round'} blueBgColor>
                     <Link to={getRouteAbout()}>{t('Link')}</Link>
                  </AppButton>
               </motion.div>
               <motion.div style={{ y: valueMoveDown }} className={cls.btn}>
                  <AppButton variant={'round'} roundSmall>
                     <Link to={getRouteAbout()}>{t('Git')}</Link>
                  </AppButton>
               </motion.div>
            </div>
         </div>
      </section>
   );
});

ProjectHeader.displayName = 'ProjectHeader';
export { ProjectHeader };
