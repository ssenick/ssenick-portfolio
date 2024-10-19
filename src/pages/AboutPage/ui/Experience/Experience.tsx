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
               company={'Freelance'}
               period={'2023 - current'}
               responsibilities={t('firstItemResponsibilities')}
            />
            <div className={cls.line}></div>
            <ExperienceItem
               className={cls.item2}
               title={t('secondItemTitle')}
               responsibilities={t('secondItemResponsibilities')}
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
               responsibilities={t('thirdItemResponsibilities')}
               description={'HTML, CSS/SCSS, JavaScript, Responsive UX/UI, Figma, GSAP, Swiper'}
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
   responsibilities: string;
   company: string;
   className?: string;
   position?: 'left' | 'right';
}
const ExperienceItem = memo((props: ExperienceItemProps) => {
   const { className, company, period, title, description, responsibilities, position = 'left' } = props;
   const { t } = useTranslation('about');
   return (
      <div className={classNames(cls.ExperienceItem, {}, [className, cls[position]])}>
         <h3 className={cls.title}>{title}</h3>
         <p className={cls.period}>{period}</p>
         <p className={cls.company}>
            <span className={cls.span}>{t('experienceItemSubtitle')}</span>
            <span> {company}</span>
         </p>
         <p className={cls.description}>{description}</p>
         <p className={cls.responsibilities}>{responsibilities}</p>
      </div>
   );
});

ExperienceItem.displayName = 'ExperienceItem';
