import { memo } from 'react';

import { classNames } from '@/helpers/classNames/classNames';

import cls from './ShimmeringText.module.scss';

interface ShimmeringTextProps {
   className?: string;
   title: string;
   subtitle?: string;
}

const ShimmeringText = memo((props: ShimmeringTextProps) => {
   const { className, title, subtitle } = props;

   return (
      <div className={classNames(cls.ShimmeringText, {}, [className])}>
         {subtitle && (
            <h5 className={classNames(cls.subtitle, {}, [cls.glitch])} data-text={subtitle}>
               {subtitle}
            </h5>
         )}
         <h1 className={classNames(cls.title, {}, [cls.glitch])} data-text={title}>
            {title}
         </h1>
      </div>
   );
});

ShimmeringText.displayName = 'ShimmeringText';
export { ShimmeringText };
