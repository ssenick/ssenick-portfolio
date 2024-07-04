import { memo } from 'react';
import { Link } from 'react-router-dom';

import Arrow from '@/assets/arrow.svg?react';
import { Socials } from '@/components/Socials/Socials';
import { Title } from '@/components/Title/Title';
import { getRouteAbout } from '@/config/route/routeConfig';
import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';
import { AppButton } from '@/UI/AppButton/AppButton';

import cls from './Footer.module.scss';

interface FooterProps {
   className?: string;
}

const Footer = memo((props: FooterProps) => {
   const { className } = props;

   return (
      <div className={classNames(cls.Footer, {}, [className])}>
         <div className={cls.quickContact}>
            <Title className={cls.title}>Need a frontend developer?</Title>
            <FramerMagnetic>
               <Link to={getRouteAbout()} className={cls.linkAbout}>
                  Let’s work together <Arrow className={cls.arrow} />
               </Link>
            </FramerMagnetic>
         </div>
         <div className={cls.information}>
            <Title>Contact information: </Title>
            <p className={cls.description}>
               Feel free to contact me anytime. I prefer to communicate via email or social networks,
               especially since we can be located in several time zones.
            </p>
         </div>
         <div className={cls.buttons}>
            <AppButton className={cls.button} oppositeColor variant="link">
               <a href="tel:+14037085691">+1 403 708 5691</a>
            </AppButton>
            <AppButton className={cls.button} oppositeColor variant="link">
               <a href="mailto:ssenick@ukr.net">ssenick@ukr.net</a>
            </AppButton>
         </div>
         <div className={cls.wrapper}>
            <div>
               <Title>Version</Title>
               <p>2024 © Edition</p>
            </div>
            <div>
               <Socials />
            </div>
         </div>
      </div>
   );
});

Footer.displayName = 'Footer';
export { Footer };
