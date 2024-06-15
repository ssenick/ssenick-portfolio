import { motion } from 'framer-motion';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';
import { NavLinks } from '@/Layout/Header/const/NavLinks';

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
}

const NavAside = memo((props: NavAsideProps) => {
   const { className } = props;
   const location = useLocation();

   return (
      <div className={classNames(cls.NavAside, {}, [className])}>
         <div className={cls.overlay} />
         <div className={cls.wrapper}>
            <div className={cls.body}>
               <nav className={cls.nav}>
                  <h5>Navigation</h5>
                  <ul>
                     {NavLinks.map(({ path, text }) => (
                        <li key={path}>
                           <FramerMagnetic>
                              <Link
                                 className={classNames(
                                    cls.link,
                                    { [cls.active]: location.pathname === path },
                                    [],
                                 )}
                                 to={path}
                              >
                                 {text}
                                 <motion.span className={cls.dot}></motion.span>
                              </Link>
                           </FramerMagnetic>
                        </li>
                     ))}
                  </ul>
               </nav>
               <div className={cls.footer}>
                  <h5>Socials</h5>
                  <ul>
                     {socials.map(({ text, href }) => (
                        <li key={href}>
                           <FramerMagnetic>
                              <a href={href} target="_blank" rel="noreferrer">
                                 <span className={cls.text}>{text}</span>
                              </a>
                           </FramerMagnetic>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/*<div></div>*/}
         </div>
      </div>
   );
});

NavAside.displayName = 'NavAside';
export { NavAside };
