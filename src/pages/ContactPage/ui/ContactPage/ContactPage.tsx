import myImage from '@/assets/image.jpg';
import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';
import { AppButton } from '@/UI/AppButton/AppButton';

import cls from './ContactPage.module.scss';
interface AboutPageProps {
   className?: string;
}

const ContactPage = (props: AboutPageProps) => {
   const { className } = props;
   console.log(myImage);
   return (
      <div className={classNames(cls.ContactPage, {}, [className])}>
         <FramerMagnetic>
            <h1>CONTACT</h1>
         </FramerMagnetic>
         <AppButton variant="link"> Button </AppButton>
      </div>
   );
};

ContactPage.displayName = 'ContactPage';
export default ContactPage;
