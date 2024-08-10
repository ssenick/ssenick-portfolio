import { memo } from 'react';

import { BlockWithTitle } from '@/components/BlockWithTitle/BlockWithTitle';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './Experience.module.scss';

interface ExperienceProps {
   className?: string;
}

const Experience = memo((props: ExperienceProps) => {
   const { className } = props;

   return (
      <BlockWithTitle className={classNames(cls.Experience, {}, [className])} title={'Experience'}>
         <div className={cls.wrapper}>
            <div className={cls.item}>1</div>
            <div className={cls.line}></div>
            <div className={cls.item2}>3</div>
            <div className={cls.item3}>3</div>
         </div>
      </BlockWithTitle>
   );
});

Experience.displayName = 'Experience';
export { Experience };
