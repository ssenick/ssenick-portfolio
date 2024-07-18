import { AnimatePresence, motion } from 'framer-motion';
import { memo, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { menuSlide, opacity, slide } from '@/const/animate';
import { socials } from '@/const/socials';
import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';
import { animatePattern } from '@/helpers/func/animatePattern';

import { navLinks } from '../../../const/navLinks';
import { Curve } from '../Curve/Curve';
import cls from './NavAside.module.scss';

interface NavAsideProps {
   className?: string;
   location: string;
   isActive?: boolean;
   setIsActive: (isActive: false) => void;
   setIsHiddenBurger: (isHiddenBurger: boolean) => void;
}

const NavAside = memo((props: NavAsideProps) => {
   const { className, location, isActive, setIsActive, setIsHiddenBurger } = props;

   const closeModal = useCallback(() => {
      setIsActive(false);
   }, [setIsActive]);

   const closeAll = useCallback(() => {
      setIsActive(false);
      setIsHiddenBurger(false);
   }, [setIsActive, setIsHiddenBurger]);

   useEffect(() => {
      if (isActive) setIsHiddenBurger(true);
   }, [setIsHiddenBurger, isActive]);

   return (
      <AnimatePresence mode="wait">
         {isActive ? (
            <div className={classNames(cls.NavAside, {}, [className])}>
               <motion.div onClick={closeModal} className={cls.overlay} {...animatePattern(opacity)} />
               <motion.div {...animatePattern(menuSlide)} className={cls.wrapper}>
                  <Curve />
                  <div className={cls.body}>
                     <nav className={cls.nav}>
                        <motion.h5 {...animatePattern(slide)}>Navigation</motion.h5>
                        <ul>
                           {navLinks.map(({ path, text }, index) => (
                              <li key={path}>
                                 <FramerMagnetic>
                                    <motion.div custom={index} {...animatePattern(slide)}>
                                       <Link
                                          onClick={closeAll}
                                          className={classNames(
                                             cls.link,
                                             { [cls.active]: location === path },
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
               </motion.div>
            </div>
         ) : null}
      </AnimatePresence>
   );
});

NavAside.displayName = 'NavAside';
export { NavAside };
