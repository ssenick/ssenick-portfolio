import { motion, useMotionValue, useSpring } from 'framer-motion';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { AppImage } from '@/components/UI/AppImage/AppImage';
import { scaleAnimation } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';
import type { projectType } from '@/types/projectsItems';

import type { animateModalType } from '../../model/types';
import cls from './AnimateModal.module.scss';

interface WorkModalProps {
   className?: string;
   modal: animateModalType;
   links: projectType[];
}

const AnimateModal = memo((props: WorkModalProps) => {
   const { className, links, modal } = props;
   const { index, active } = modal;
   const { t } = useTranslation();
   const mouse = {
      x: useMotionValue(0),
      y: useMotionValue(0),
   };
   const smoothOptions = { damping: 20, stiffness: 200, mass: 0.5 };

   const smoothMouse = {
      x: useSpring(mouse.x, smoothOptions),
      y: useSpring(mouse.y, smoothOptions),
   };

   const manageMouseMove = useCallback(
      (e: MouseEvent) => {
         mouse.x.set(e.clientX);
         mouse.y.set(e.clientY);
      },
      [mouse.x, mouse.y],
   );
   useEffect(() => {
      window.addEventListener('mousemove', manageMouseMove);

      return () => {
         window.removeEventListener('mousemove', manageMouseMove);
      };
   }, [manageMouseMove]);
   return (
      <motion.div
         style={{
            left: smoothMouse.x,
            top: smoothMouse.y,
         }}
         variants={scaleAnimation}
         initial="initial"
         animate={active ? 'enter' : 'closed'}
         className={classNames(cls.AnimateModal, {}, [className])}
      >
         <div style={{ top: index * -100 + '%' }} className={cls.modalSlider}>
            {links.map(({ id, images }) => (
               <div className={cls.modal} key={id + '_modal'}>
                  <AppImage src={images?.preview} className={cls.img} loading="lazy" />
               </div>
            ))}
         </div>
         <div className={cls.cursor}></div>
         <div className={cls.cursorLabel}>{t('View')}</div>
      </motion.div>
   );
});

AnimateModal.displayName = 'AnimateModal';
export { AnimateModal };
