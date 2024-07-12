import { Page } from '@/components/Page/Page';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './AboutPage.module.scss';

interface AboutPageProps {
   className?: string;
}

const AboutPage = (props: AboutPageProps) => {
   const { className } = props;

   return (
      <Page className={classNames(cls.AboutPage, {}, [className])}>
         <div style={{ height: '120vh' }}>ABOUT</div>
      </Page>
   );
};

AboutPage.displayName = 'AboutPage';
export default AboutPage;
