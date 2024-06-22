import { memo, useCallback } from 'react';

import { AppButton } from '@/UI/AppButton/AppButton';

interface MenuBtnProps {
   setActiveButton: (activeButton: boolean) => void;
}

const MenuBtn = memo((props: MenuBtnProps) => {
   const { setActiveButton } = props;

   const toggleButton = useCallback(() => {
      setActiveButton(true);
   }, [setActiveButton]);

   return (
      <AppButton onClick={toggleButton} variant="menu">
         Menu
      </AppButton>
   );
});

MenuBtn.displayName = 'MenuBtn';
export { MenuBtn };
