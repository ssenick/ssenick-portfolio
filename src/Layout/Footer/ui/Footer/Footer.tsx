import { motion, useScroll, useTransform } from 'framer-motion';
import { memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Arrow from '@/assets/arrow.svg?react';
import { Socials } from '@/components/Socials/Socials';
import { getRouteContact } from '@/config/route/routeConfig';
import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';
import { AppButton } from '@/UI/AppButton/AppButton';
import { Title } from '@/UI/Title/Title';

import cls from './Footer.module.scss';

interface FooterProps {
   className?: string;
}

const Footer = memo((props: FooterProps) => {
   const { className } = props;
   const ref = useRef<HTMLDivElement | null>(null);
   const { t } = useTranslation();

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end end'],
   });
   const valueHeight = useTransform(scrollYProgress, [0, 1], [1, 0]);
   const valueMove = useTransform(scrollYProgress, [0, 1], ['-30%', '0%']);

   return (
      <div ref={ref} className={classNames(cls.Footer, {}, [className])}>
         <motion.div className={cls.roundWrapper} style={{ scaleY: valueHeight }}>
            <div className={cls.round}></div>
         </motion.div>
         <motion.div style={{ y: valueMove }}>
            <div className={cls.quickContact}>
               <Title className={cls.title}>{t('Footer title')}</Title>
               <FramerMagnetic>
                  <Link to={getRouteContact()} className={cls.linkAbout}>
                     {t('Footer link')} <Arrow className={cls.arrow} />
                  </Link>
               </FramerMagnetic>
            </div>
            <div className={cls.information}>
               <Title>{t('Footer inform title')} </Title>
               <p className={cls.description}>{t('Footer description')}</p>
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
                  <Title>{t('Version')}</Title>
                  <p>{t('2024 © Edition')}</p>
               </div>
               <div>
                  <Socials />
               </div>
            </div>
         </motion.div>
      </div>
   );
});

Footer.displayName = 'Footer';
export { Footer };
