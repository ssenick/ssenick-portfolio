import { memo } from 'react';

import { Title } from '@/components/Title/Title';
import { socials } from '@/const/socials';
import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';

import cls from './Socials.module.scss';

interface SocialsProps {
   className?: string;
}

const Socials = memo((props: SocialsProps) => {
   const { className } = props;

   return (
      <div className={classNames(cls.Socials, {}, [className])}>
         <Title className={cls.title}>Socials</Title>
         <ul className={cls.list}>
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
   );
});

Socials.displayName = 'Socials';
export { Socials };
