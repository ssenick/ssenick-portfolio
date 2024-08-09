import { memo } from 'react';

import { BlockWithTitle } from '@/components/BlockWithTitle/BlockWithTitle';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './Skills.module.scss';

interface SkillsProps {
   className?: string;
}

const Skills = memo((props: SkillsProps) => {
   const { className } = props;

   return (
      <BlockWithTitle className={classNames(cls.Skills, {}, [className])} title={'skills'}></BlockWithTitle>
   );
});

Skills.displayName = 'Skills';
export { Skills };
