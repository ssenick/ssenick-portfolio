import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import AvatarImage from '@/assets/me.webp';
import { LinksList } from '@/components/LinksList/LinksList.tsx';
import { AppImage } from '@/components/UI/AppImage/AppImage.tsx';
import { contacts } from '@/content/contacts.ts';
import { socials } from '@/content/socials.ts';
import { classNames } from '@/helpers/classNames/classNames';

import { ContactForm } from '../ContactForm/ContactForm.tsx';
import cls from './ContactMain.module.scss';

interface ContactMainProps {
   className?: string;
}

const ContactMain = memo((props: ContactMainProps) => {
   const { className } = props;
   const { t } = useTranslation('contact');

   return (
      <div className={classNames(cls.ContactMain, {}, [className])}>
         <div className={classNames(cls.wrapper, {}, [cls.header])}>
            <h1 className={cls.title}>{t('title')}</h1>
         </div>
         <div className={classNames(cls.wrapper, {}, [cls.main])}>
            <ContactForm />
            <div className={cls.sidebar}>
               <div className={cls.avatar}>
                  <AppImage src={AvatarImage} className={cls.image} />
               </div>
               <LinksList title={t('Contact Details')} items={contacts} column />
               <LinksList title={t('Socials')} items={socials} column />
            </div>
         </div>
      </div>
   );
});

ContactMain.displayName = 'ContactMain';
export { ContactMain };
