import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { AppButton } from '@/components/UI/AppButton/AppButton';
import { classNames } from '@/helpers/classNames/classNames';

interface MenuBtnProps {
   setActiveButton: (activeButton: boolean) => void;
   className?: string;
}

const MenuBtn = memo((props: MenuBtnProps) => {
   const { setActiveButton, className } = props;
   const { t } = useTranslation();
   const toggleButton = useCallback(() => {
      setActiveButton(true);
   }, [setActiveButton]);

   return (
      <AppButton onClick={toggleButton} variant="menu" className={classNames('', {}, [className])}>
         {t('Menu')}
      </AppButton>
   );
});

MenuBtn.displayName = 'MenuBtn';
export { MenuBtn };
