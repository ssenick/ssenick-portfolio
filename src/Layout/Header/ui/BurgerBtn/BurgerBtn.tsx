import { memo, useCallback } from 'react';

import { AppButton } from '@/components/UI/AppButton/AppButton';

interface BurgerBtnProps {
   activeButton: boolean;
   setActiveButton: (activeButton: boolean) => void;
}

const BurgerBtn = memo((props: BurgerBtnProps) => {
   const { setActiveButton, activeButton } = props;

   const toggleButton = useCallback(() => {
      if (setActiveButton) {
         setActiveButton(!activeButton);
      }
   }, [activeButton, setActiveButton]);

   return <AppButton onClick={toggleButton} btnActive={activeButton} variant="burger"></AppButton>;
});

BurgerBtn.displayName = 'BurgerBtn';
export { BurgerBtn };
