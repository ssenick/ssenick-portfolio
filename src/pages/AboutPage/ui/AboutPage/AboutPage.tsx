import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef } from 'react';

import { Page } from '@/components/Page/Page';
import { classNames } from '@/helpers/classNames/classNames';
import { Brain } from '@/pages/AboutPage/ui/Brain/Brain';

import cls from './AboutPage.module.scss';

interface AboutPageProps {
   className?: string;
}

const AboutPage = (props: AboutPageProps) => {
   const { className } = props;
   const ref = useRef<HTMLDivElement | null>(null);

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start start', 'end end'],
   });
   // const valueMove = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);

   useMotionValueEvent(scrollYProgress, 'change', (latest) => {
      console.log(latest);
   });
   return (
      <Page className={classNames(cls.AboutPage, {}, [className])}>
         <div ref={ref} className={cls.wrapper}>
            <div className={cls.textBlock}>
               {/* Биография */}
               <div className={cls.biography}>BIOGRAPHY</div>
               {/* Скилы */}
               <div className={cls.skills}>SKILLS</div>
               {/* Опыт */}
               <div className={cls.experience}>EXPERIENCE</div>
            </div>
            <motion.div className={cls.imageBlock}>
               <Brain className={cls.brain} scrollYProgress={scrollYProgress} />
            </motion.div>
            <div style={{ height: '100vh' }}></div>
         </div>
      </Page>
   );
};

AboutPage.displayName = 'AboutPage';
export default AboutPage;
