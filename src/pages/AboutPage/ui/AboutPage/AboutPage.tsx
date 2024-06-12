import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';

import cls from './AboutPage.module.scss';

interface AboutPageProps {
   className?: string;
}

const AboutPage = (props: AboutPageProps) => {
   const { className } = props;
   return (
      <div className={classNames(cls.AboutPage, {}, [className])}>
         <FramerMagnetic>
            <h1>ABOUT</h1>
         </FramerMagnetic>
      </div>
   );
};

AboutPage.displayName = 'AboutPage';
export default AboutPage;
