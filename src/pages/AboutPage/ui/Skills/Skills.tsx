import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { BlockWithTitle } from '@/components/BlockWithTitle/BlockWithTitle';
import { Title } from '@/components/UI/Title/Title';
import { skills } from '@/content/skills';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './Skills.module.scss';

interface SkillsProps {
   className?: string;
}

const Skills = memo((props: SkillsProps) => {
   const { className } = props;
   const { t } = useTranslation('about');

   return (
      <BlockWithTitle className={classNames(cls.Skills, {}, [className])} title={t('titleSkills')}>
         <div className={cls.content}>
            <div className={cls.wrapper}>
               <Title notPadding>{t('firstSubtitleSkills')}</Title>
               <ul className={cls.list}>
                  {skills.technicalSkills.map(({ name, id }) => (
                     <li key={id} className={cls.item}>
                        {name}
                     </li>
                  ))}
               </ul>
            </div>
            <div className={cls.wrapper}>
               <Title notPadding>{t('secondSubtitleSkills')}</Title>

               <ul className={cls.list}>
                  {skills.tools.map(({ name, id }) => (
                     <li key={id} className={cls.item}>
                        {name}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </BlockWithTitle>
   );
});

Skills.displayName = 'Skills';
export { Skills };
