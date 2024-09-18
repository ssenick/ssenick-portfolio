import { memo } from 'react';

import LaptopImage from '@/assets/devices/device-mbp-15.webp';
import TabletImage from '@/assets/devices/tablet.webp';
import { AppImage } from '@/components/UI/AppImage/AppImage.tsx';
import { classNames } from '@/helpers/classNames/classNames';
import type { projectsImageSizes } from '@/types/projectsItems.ts';

import cls from './ProjectLaptop.module.scss';

interface ProjectLaptopProps {
   className?: string;
   images: projectsImageSizes;
   tablet?: boolean;
}

const ProjectLaptop = memo((props: ProjectLaptopProps) => {
   const { className, images, tablet } = props;
   const { big, small } = images;
   return (
      <div className={classNames(cls.ProjectLaptop, {}, [className])}>
         <div className={cls.picture}>
            <AppImage className={cls.image} src={big} spare={small} alt="project image" loading="lazy" />
         </div>
         <div className={cls.device}>
            <AppImage
               className={cls.laptopImage}
               src={tablet ? TabletImage : LaptopImage}
               alt="macbook image"
            />
         </div>
      </div>
   );
});

ProjectLaptop.displayName = 'ProjectLaptop';
export { ProjectLaptop };
