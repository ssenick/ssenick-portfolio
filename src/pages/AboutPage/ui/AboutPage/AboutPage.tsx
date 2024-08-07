import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { Page } from '@/components/Page/Page';
import { classNames } from '@/helpers/classNames/classNames';
import { useBrowserInfo } from '@/hooks/useBrowserInfo';
import { Skills } from '@/pages/AboutPage/ui/Skills/Skills';

import { Biography } from '../Biography/Biography';
import { Brain } from '../Brain/Brain';
import { BrainSafari } from '../Brain/BrainSafari';
import cls from './AboutPage.module.scss';

interface AboutPageProps {
   className?: string;
}

const AboutPage = (props: AboutPageProps) => {
   const { className } = props;
   const browserInfo = useBrowserInfo();
   const ref = useRef<HTMLDivElement | null>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start start', 'end end'],
   });

   const valueMove = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);

   // useMotionValueEvent(scrollYProgress, 'change', (latest) => {
   //    console.log(wrapperHeight);
   // });

   return (
      <Page className={classNames(cls.AboutPage, {}, [className])}>
         <div ref={ref} className={cls.wrapper}>
            <div className={cls.textBlock}>
               {/* Биография */}
               <Biography className={cls.biography} />
               {/* Скилы */}
               <Skills className={cls.skills} />
               {/* Опыт */}
               <div className={cls.experience}>EXPERIENCE</div>
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
