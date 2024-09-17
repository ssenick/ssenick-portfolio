import { motion, useScroll, useTransform } from 'framer-motion';
import { memo, useRef } from 'react';

import { classNames } from '@/helpers/classNames/classNames';
import { ProjectMobile } from '@/pages/ProjectPage/ui/ProjectMobile/ProjectMobile.tsx';
import type { projectType } from '@/types/projectsItems.ts';

import cls from './ProjectDevices.module.scss';

interface ProjectDevicesProps {
   className?: string;
   project: projectType;
}

const ProjectDevices = memo((props: ProjectDevicesProps) => {
   const { className, project } = props;
   const ref = useRef<HTMLDivElement | null>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start'],
   });

   const valueMoveOne = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);
   const valueMoveTwo = useTransform(scrollYProgress, [0, 1], ['0%', '0%']);
   const valueMoveThree = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
   const animations = [valueMoveOne, valueMoveTwo, valueMoveThree];

   const mobileImages = project?.images?.devices?.mobile;
   return (
      <div ref={ref} className={classNames(cls.ProjectDevices, {}, [className])}>
         <div className={cls.wrapper}>
            <div className={cls.mobiles}>
               {mobileImages?.map((picture, i) => (
                  <motion.div key={i} style={{ y: animations[i] }} className={cls.mobile}>
                     <ProjectMobile images={picture} />
                  </motion.div>
               ))}
            </div>
         </div>
      </div>
   );
});

ProjectDevices.displayName = 'ProjectDevices';
export { ProjectDevices };
