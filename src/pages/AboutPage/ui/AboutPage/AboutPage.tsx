import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { Page } from '@/components/Page/Page';
import { classNames } from '@/helpers/classNames/classNames';
import { useBrowserInfo } from '@/hooks/useBrowserInfo';

import { Biography } from '../Biography/Biography';
import { Brain } from '../Brain/Brain';
import { BrainSafari } from '../Brain/BrainSafari';
import { Experience } from '../Experience/Experience';
import { Skills } from '../Skills/Skills';
import cls from './AboutPage.module.scss';

interface AboutPageProps {
   className?: string;
}

const AboutPage = (props: AboutPageProps) => {
   const { className } = props;
   const browserInfo = useBrowserInfo();
   const wrapperRef = useRef<HTMLDivElement | null>(null);

   const { scrollYProgress } = useScroll({
      target: wrapperRef,
      offset: ['start start', 'end end'],
   });

   const valueMove = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
   return (
      <Page className={classNames(cls.AboutPage, {}, [className])}>
         <div ref={wrapperRef} className={cls.wrapper}>
            <div className={cls.textBlock}>
               {/* Биография */}
               <Biography className={cls.biography} />
               {/* Скилы */}
               <Skills className={cls.skills} />
               {/* Опыт */}
               <Experience className={cls.experience} />
            </div>
            <div className={cls.imageBlock}>
               <motion.div className={cls.image} style={{ top: valueMove }}>
                  {browserInfo?.name !== 'Safari' ? (
                     <Brain className={cls.brain} scrollYProgress={scrollYProgress} />
                  ) : (
                     <BrainSafari className={cls.brain} />
                  )}
               </motion.div>
            </div>
         </div>
      </Page>
   );
};

AboutPage.displayName = 'AboutPage';
export default AboutPage;
