import emailjs from '@emailjs/browser';
import { memo, useCallback, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast, Toaster } from 'sonner';

import PostIcon from '@/assets/icons/post.svg?react';
import { AppButton } from '@/components/UI/AppButton/AppButton.tsx';
import { AppInput } from '@/components/UI/AppInput/AppInput.tsx';
import { AppTextArea } from '@/components/UI/AppTextArea/AppTextArea.tsx';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './ContactForm.module.scss';

export interface IForm {
   name: string;
   email: string;
   message: string;
}

interface ContactFormProps {
   className?: string;
}

const ContactForm = memo((props: ContactFormProps) => {
   const { className } = props;
   const [statusReCAPTCHA, setStatusReCAPTCHA] = useState<string | null>(null);
   const { t } = useTranslation('contact');

   const { register, handleSubmit, formState, reset } = useForm<IForm>({
      mode: 'onSubmit',
   });

   const emailError = formState.errors.email?.message;
   const nameError = formState.errors.name?.message;
   const messageError = formState.errors.message?.message;
   const onChangeReCAPTCHA = (value: string | null) => {
      setStatusReCAPTCHA(value);
   };

   const onSubmit: SubmitHandler<IForm> = useCallback(
      (data) => {
         if (!statusReCAPTCHA) {
            toast.error(t('message toast'));
            return;
         }
         const loadingToastId = toast.loading(t('loading toast'));

         emailjs
            .send(
               import.meta.env.VITE_EMAIL_SERVICE_KEY,
               import.meta.env.VITE_EMAIL_TEMPLATE_KEY,
               {
                  user_name: data.name,
                  user_email: data.email,
                  message: data.message,
               },
               import.meta.env.VITE_EMAIL_USER_ID_KEY,
            )
            .then(() => {
               toast.success(t('success toast'), {
                  id: loadingToastId,
               });
               reset();
            })
            .catch((error) => {
               console.log(error);
               toast.error(t('error toast'), {
                  id: loadingToastId,
               });
            });
      },
      [statusReCAPTCHA, reset, t],
   );

   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)} className={classNames(cls.ContactForm, {}, [className])}>
            <div className={cls.wrapper}>
               <AppInput
                  className={cls.input}
                  type="text"
                  label={t('Your name *')}
                  {...register('name', {
                     required: t('required'),
                  })}
                  error={nameError}
               />
               <AppInput
                  className={cls.input}
                  type="email"
                  label={t('Your email *')}
                  {...register('email', {
                     required: t('required'),
                     pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: t('valid email'),
                     },
                  })}
                  error={emailError}
               />
            </div>
            <AppTextArea
               className={cls.input}
               label={t('Your message')}
               maxLength={3000}
               error={messageError}
               {...register('message', {
                  maxLength: {
                     value: 3000,
                     message: t('3000 characters'),
                  },
               })}
            />
            <div className={cls.recaptchaWrapper}>
               <ReCAPTCHA
                  className={cls.recaptcha}
                  sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
                  onChange={onChangeReCAPTCHA}
               />
            </div>

            <div className={cls.footer}>
               <AppButton type={'submit'}>
                  <span className={cls.btn}>
                     <span>{t('Send')}</span>
                     <PostIcon />
                  </span>
               </AppButton>
            </div>
         </form>
         <Toaster
            richColors
            toastOptions={{
               style: {
                  fontSize: 'var(--h5-font-size)',
                  padding: '1em',
               },
            }}
         />
      </div>
   );
});

ContactForm.displayName = 'ContactForm';
export { ContactForm };
