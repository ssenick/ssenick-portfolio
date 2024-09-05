import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ShimmeringText } from '@/components/ShimmeringText/ShimmeringText.tsx';
import { AppButton } from '@/components/UI/AppButton/AppButton.tsx';

import cls from './ErrorPage.module.scss';

const ErrorPage = memo(() => {
   const { t } = useTranslation('error');
   const reloadPage = useCallback(() => {
      location.reload();
   }, []);
   return (
      <div className={cls.ErrorPage}>
         <ShimmeringText title={t('title')} subtitle={t('subtitle')} />
         <div className={cls.footer}>
            <AppButton onClick={reloadPage} variant={'round'}>
               {t('Обновить страницу')}
            </AppButton>
         </div>
      </div>
   );
});

ErrorPage.displayName = 'ErrorPage';
export { ErrorPage };
