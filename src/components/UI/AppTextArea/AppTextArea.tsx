import type { ChangeEvent, InputHTMLAttributes } from 'react';
import { useState } from 'react';
import { forwardRef } from 'react';

import { classNames } from '@/helpers/classNames/classNames';

import cls from './AppTextArea.module.scss';

interface AppTextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
   className?: string;
   label?: string;
   error?: string | undefined;
   maxLength?: number;
}

const AppTextArea = forwardRef<HTMLTextAreaElement, AppTextAreaProps>((props, ref) => {
   const { className, label, error, maxLength, onChange, ...otherProps } = props;
   const [harCount, setCharCount] = useState(0);
   const maxLengthChars = maxLength;

   const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      console.log(event);
      setCharCount(event.target.value.length);
      if (onChange) {
         onChange(event);
      }
   };

   return (
      <label className={classNames(cls.AppTextArea, { [cls.isError]: error }, [className])}>
         {label && <h5 className={cls.label}>{label}</h5>}
         <textarea ref={ref} onChange={handleInputChange} className={cls.input} {...otherProps} />
         <div className={cls.wrapper}>
            {error && <span className={cls.error}>{error}</span>}
            {maxLengthChars && (
               <span className={cls.chart}>
                  {harCount} / {maxLengthChars}
               </span>
            )}
         </div>
      </label>
   );
});

AppTextArea.displayName = 'AppTextArea';
export { AppTextArea };
