import { classNames } from '@/helpers/classNames/classNames';

import cls from './AboutPage.module.scss';

interface AboutPageProps {
   className?: string;
}

const AboutPage = (props: AboutPageProps) => {
   const { className } = props;
   return (
      <div className={classNames(cls.AboutPage, {}, [className])}>
         <h1>ABOUT</h1>
      </div>
   );
};

AboutPage.displayName = 'AboutPage';
export default AboutPage;
