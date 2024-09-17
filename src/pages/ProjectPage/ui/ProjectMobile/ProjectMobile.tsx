import { memo } from 'react';

import MobileImage from '@/assets/devices/iphone.webp';
import { AppImage } from '@/components/UI/AppImage/AppImage.tsx';
import { classNames } from '@/helpers/classNames/classNames';
import type { projectsImageSizes } from '@/types/projectsItems.ts';

import cls from './ProjectMobile.module.scss';

interface ProjectMobileProps {
   className?: string;
   images: projectsImageSizes;
}

const ProjectMobile = memo((props: ProjectMobileProps) => {
   const { className, images } = props;
   const { big, small } = images;
   return (
      <div className={classNames(cls.ProjectMobile, {}, [className])}>
         <div className={cls.picture}>
            <AppImage className={cls.image} src={big} spare={small} alt="project image" loading="lazy" />
         </div>
         <div className={cls.device}>
            <AppImage className={cls.laptopImage} src={MobileImage} alt="mobile image" />
         </div>
      </div>
   );
});

ProjectMobile.displayName = 'ProjectMobile';
export { ProjectMobile };
