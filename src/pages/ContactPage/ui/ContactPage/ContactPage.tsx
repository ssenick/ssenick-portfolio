import myImage from '@/assets/image.jpg';
import { Page } from '@/components/Page/Page';
import { AppButton } from '@/components/UI/AppButton/AppButton';
import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';

import cls from './ContactPage.module.scss';
interface AboutPageProps {
   className?: string;
}

const ContactPage = (props: AboutPageProps) => {
   const { className } = props;
   console.log(myImage);
   return (
      <Page className={classNames(cls.ContactPage, {}, [className])}>
         <FramerMagnetic>
            <h1>CONTACT</h1>
         </FramerMagnetic>
         <AppButton variant="link"> Button </AppButton>
      </Page>
   );
};

ContactPage.displayName = 'ContactPage';
export default ContactPage;
