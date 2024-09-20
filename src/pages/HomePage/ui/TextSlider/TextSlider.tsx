import { motion } from 'framer-motion';
import { memo } from 'react';

import ImageFront from '@/assets/icons/front.svg?react';
import { classNames } from '@/helpers/classNames/classNames';
import { useParallaxSlider } from '@/hooks/useParallaxSlider';

import cls from './TextSlider.module.scss';
interface TextSliderProps {
   className?: string;
}

const TextSlider = memo((props: TextSliderProps) => {
   const { className } = props;
   const x = useParallaxSlider(10);

   return (
      <motion.div className={classNames(cls.TextSlider, {}, [className])} style={{ x }}>
         <ImageFront className={cls.svg} />
         <ImageFront className={cls.svg} />
      </motion.div>
   );
});

TextSlider.displayName = 'TextSlider';
export { TextSlider };
