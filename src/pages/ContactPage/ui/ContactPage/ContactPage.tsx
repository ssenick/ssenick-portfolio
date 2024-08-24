import { Page } from '@/components/Page/Page';
import { classNames } from '@/helpers/classNames/classNames';

import { ContactHeader } from '../ContactHeader/ContactHeader.tsx';
import { ContactMain } from '../ContactMain/ContactMain.tsx';
import cls from './ContactPage.module.scss';

interface AboutPageProps {
   className?: string;
}

const ContactPage = (props: AboutPageProps) => {
   const { className } = props;

   return (
      <Page className={classNames(cls.ContactPage, {}, [className])}>
         <ContactHeader />
         <ContactMain />
      </Page>
   );
};

ContactPage.displayName = 'ContactPage';
export default ContactPage;
