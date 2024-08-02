import { memo } from 'react';

import { classNames } from '@/helpers/classNames/classNames';

import cls from './Radio.module.scss';

interface RadioProps {
   className?: string;
}

const Radio = memo((props: RadioProps) => {
   const { className } = props;

   return <div className={classNames(cls.Radio, {}, [className])}></div>;
});

Radio.displayName = 'Radio';
export { Radio };
