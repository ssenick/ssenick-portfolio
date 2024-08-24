import { memo } from 'react';

import { Title } from '@/components/UI/Title/Title';
import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';

import cls from './LinksList.module.scss';

export interface ILinksList {
   text: string;
   href: string;
   target: '_blank' | '_self';
}

interface LinksListProps {
   className?: string;
   title: string;
   items: ILinksList[];
   column?: boolean;
}

const LinksList = memo((props: LinksListProps) => {
   const { className, column, title, items } = props;
   return (
      <div className={classNames(cls.LinksList, { [cls.column]: column }, [className])}>
         <Title className={cls.title}>{title}</Title>
         <ul className={cls.list}>
            {items.map(({ text, href }) => (
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

LinksList.displayName = 'LinksList';
export { LinksList };
