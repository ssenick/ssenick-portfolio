import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { classNames } from '@/helpers/classNames/classNames';

import cls from './AppInput.module.scss';

interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
   className?: string;
   label?: string;
   error?: string | undefined;
}

const AppInput = forwardRef<HTMLInputElement, AppInputProps>((props, ref) => {
   const { className, label, type, error, ...otherProps } = props;

   return (
      <label className={classNames(cls.AppInput, { [cls.isError]: error }, [className])}>
         <input ref={ref} className={cls.input} type={type} placeholder=" " {...otherProps} />
         {label && <h5 className={cls.label}>{label}</h5>}
         {error && <span className={cls.error}>{error}</span>}
      </label>
   );
});

AppInput.displayName = 'AppInput';
export { AppInput };
