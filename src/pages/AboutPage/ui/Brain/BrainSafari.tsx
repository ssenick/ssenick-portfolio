import type { MotionValue } from 'framer-motion';
import { memo } from 'react';

import BrainSvg from '@/assets/brain.svg?react';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './Brain.module.scss';

interface BrainProps {
   className?: string;
   scrollYProgress?: MotionValue<number>;
}

const BrainSafari = memo((props: BrainProps) => {
   const { className } = props;

   return (
      <div className={classNames(cls.Brain, {}, [className])}>
         <BrainSvg />
      </div>
   );
});

BrainSafari.displayName = 'BrainSafari';
export { BrainSafari };
