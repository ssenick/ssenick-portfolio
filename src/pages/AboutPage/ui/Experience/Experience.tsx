import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { BlockWithTitle } from '@/components/BlockWithTitle/BlockWithTitle';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './Experience.module.scss';

interface ExperienceProps {
   className?: string;
}

const Experience = memo((props: ExperienceProps) => {
   const { className } = props;
   const { t } = useTranslation('about');
   return (
      <BlockWithTitle className={classNames(cls.Experience, {}, [className])} title={t('titleExperience')}>
         <div className={cls.wrapper}>
            <ExperienceItem
               className={cls.item}
               title={t('firstItemTitle')}
               description={
                  'React, Redux Toolkit, TypeScript,' +
                  ' JS, API Integration, UI/UX, CI/CD Pipelines,' +
                  ' Storybook, Git, Jest, i18n, Prettier, ESLint, StyleLint'
               }
               company={'Freelance (Self employed)'}
               period={'2023 - 2024'}
            />
            <div className={cls.line}></div>
            <ExperienceItem
               className={cls.item2}
               title={t('secondItemTitle')}
               description={
                  'React, Redux Toolkit, TypeScript, JS, RESTful API, Git, Storybook, CI/CD, Hasky, i18n'
               }
               company={'WeCan-IT'}
               period={'2022 - 2023'}
               position="right"
            />
            <ExperienceItem
               className={cls.item3}
               title={t('thirdItemTitle')}
               description={'HTML, CSS, JavaScript, Responsive UX/UI, Figma'}
               company={'klepka.digital'}
               period={'2021 - 2022'}
            />
         </div>
      </BlockWithTitle>
   );
});

Experience.displayName = 'Experience';
export { Experience };

interface ExperienceItemProps {
   title: string;
   description: string;
   period: string;
   company: string;
   className?: string;
   position?: 'left' | 'right';
}
const ExperienceItem = memo((props: ExperienceItemProps) => {
   const { className, company, period, title, description, position = 'left' } = props;
   const { t } = useTranslation('about');
   return (
      <div className={classNames(cls.ExperienceItem, {}, [className, cls[position]])}>
         <h3 className={cls.title}>{title}</h3>
         <p className={cls.description}>{description}</p>
         <p className={cls.period}>{period}</p>
         <p className={cls.company}>
            <span className={cls.span}>{t('experienceItemSubtitle')}</span>
            <span> {company}</span>
         </p>
      </div>
   );
});

ExperienceItem.displayName = 'ExperienceItem';
