import { AnimatePresence, motion } from 'framer-motion';
import { memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { animatePattern } from '@/app/poviders/PageTransition/helpers/animatePattern';
import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';

import { menuSlide, opacity, slide } from '../../../const/animate';
import { NavLinks } from '../../../const/NavLinks';
import { Curve } from '../Curve/Curve';
import cls from './NavAside.module.scss';

interface Socials {
   text: string;
   href: string;
}

const socials: Socials[] = [
   {
      text: 'Instagram',
      href: 'https://www.instagram.com/senchenkoruslan',
   },
   {
      text: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100003676742055',
   },
   {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/ruslan-senchenko',
   },
   {
      text: 'GitHub',
      href: 'https://github.com/ssenick',
   },
];

interface NavAsideProps {
   className?: string;
   isActive?: boolean;
   setIsActive?: (isActive: false) => void;
}

const NavAside = memo((props: NavAsideProps) => {
   const { className, isActive, setIsActive } = props;
   const location = useLocation();

   const closeModal = useCallback(() => {
      setIsActive && setIsActive(false);
   }, [setIsActive]);

   return (
      <AnimatePresence mode="wait">
         {isActive && (
            <div className={classNames(cls.NavAside, {}, [className])}>
               <motion.div onClick={closeModal} className={cls.overlay} {...animatePattern(opacity)} />
               <motion.div {...animatePattern(menuSlide)} className={cls.wrapper}>
                  <div className={cls.body}>
                     <nav className={cls.nav}>
                        <motion.h5 {...animatePattern(slide)}>Navigation</motion.h5>
                        <ul>
                           {NavLinks.map(({ path, text }, index) => (
                              <li key={path}>
                                 <FramerMagnetic>
                                    <motion.div custom={index} {...animatePattern(slide)}>
                                       <Link
                                          onClick={closeModal}
                                          className={classNames(
                                             cls.link,
                                             { [cls.active]: location.pathname === path },
                                             [],
                                          )}
                                          to={path}
                                       >
                                          {text}
                                          <span className={cls.dot}></span>
                                       </Link>
                                    </motion.div>
                                 </FramerMagnetic>
                              </li>
                           ))}
                        </ul>
                     </nav>
                     <div className={cls.footer}>
                        <motion.h5 {...animatePattern(slide)}>Socials</motion.h5>
                        <ul>
                           {socials.map(({ text, href }) => (
                              <li key={href}>
                                 <FramerMagnetic>
                                    <a href={href} target="_blank" rel="noreferrer">
                                       <motion.div {...animatePattern(slide)}>
                                          <span className={cls.text}>{text}</span>
                                       </motion.div>
                                    </a>
                                 </FramerMagnetic>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <Curve />
               </motion.div>
            </div>
         )}
      </AnimatePresence>
   );
});

NavAside.displayName = 'NavAside';
export { NavAside };
