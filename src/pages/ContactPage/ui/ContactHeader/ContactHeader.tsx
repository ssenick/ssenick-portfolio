import { motion, useScroll, useTransform } from 'framer-motion';
import { memo } from 'react';

import { classNames } from '@/helpers/classNames/classNames';
import { ContactMap } from '@/pages/ContactPage/ui/ContactMap/ContactMap.tsx';

import cls from './ContactHeader.module.scss';

interface ContactHeaderProps {
   className?: string;
}

const text = ['L', 'E', 'T', 'S', 'W', 'O', 'R', 'K', 'T', 'O', 'G', 'E', 'T', 'H', 'E', 'R'];

const ContactHeader = memo((props: ContactHeaderProps) => {
   const { className } = props;
   const { scrollYProgress } = useScroll();

   const offsetToTop = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
   const offsetToBottom = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

   return (
      <div className={classNames(cls.ContactHeader, {}, [className])}>
         <ContactMap className={cls.map} />
         <div className={cls.title}>
            {text.map((letter, index) => (
               <motion.i
                  key={index}
                  style={{ y: index % 2 === 0 ? offsetToTop : offsetToBottom }}
                  className={cls[letter === 'T' && index === 2 ? 'apostrophe' : letter === 'K' ? 'mark' : '']}
               >
                  {letter}
               </motion.i>
            ))}
         </div>
      </div>
   );
});

ContactHeader.displayName = 'ContactHeader';
export { ContactHeader };
