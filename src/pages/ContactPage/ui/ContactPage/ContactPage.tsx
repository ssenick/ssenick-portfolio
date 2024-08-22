import { Page } from '@/components/Page/Page';
import { classNames } from '@/helpers/classNames/classNames';

import { ContactMap } from '../ContactMap/ContactMap.tsx';
import cls from './ContactPage.module.scss';
interface AboutPageProps {
   className?: string;
}

const ContactPage = (props: AboutPageProps) => {
   const { className } = props;

   return (
      <Page className={classNames(cls.ContactPage, {}, [className])}>
         <div className={cls.container}>
            <div className={cls.header}>
               <ContactMap className={cls.map} />
               <div className={cls.title}>
                  <i>L</i>
                  <i>E</i>
                  <i className={cls.apostrophe}>T</i>
                  <i>S</i>
                  <i>W</i>
                  <i>O</i>
                  <i>R</i>
                  <i className={cls.mark}>K</i>
                  <i>T</i>
                  <i>O</i>
                  <i>G</i>
                  <i>E</i>
                  <i>T</i>
                  <i>H</i>
                  <i>E</i>
                  <i>R</i>
               </div>
            </div>

            <div className={cls.wrapper}>
               <h1>CONTACT</h1>

               <div style={{ height: '100vh' }}></div>
            </div>
         </div>
      </Page>
   );
};

ContactPage.displayName = 'ContactPage';
export default ContactPage;
