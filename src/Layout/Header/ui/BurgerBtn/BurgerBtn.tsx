import { AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { memo, useCallback } from 'react';

import { AppButton } from '@/components/UI/AppButton/AppButton';

interface BurgerBtnProps {
   activeButton: boolean;
   setActiveButton: (activeButton: boolean) => void;
   hiddeBurger: boolean;
   setHiddeBurgerButton: (hiddenBurger: boolean) => void;
}

const BurgerBtn = memo((props: BurgerBtnProps) => {
   const { setActiveButton, activeButton, hiddeBurger, setHiddeBurgerButton } = props;
   const { scrollY } = useScroll();

   const toggleButton = useCallback(() => {
      setActiveButton(!activeButton);
      if (activeButton && scrollY.get() < 150) setHiddeBurgerButton(false);
   }, [setActiveButton, scrollY, setHiddeBurgerButton, activeButton]);

   useMotionValueEvent(scrollY, 'change', (latest) => {
      if (latest > 160 && !activeButton) {
         setHiddeBurgerButton(true);
      } else if (latest < 160 && !activeButton) {
         setHiddeBurgerButton(false);
      }
   });

   return (
      <AnimatePresence mode="wait">
         {hiddeBurger && (
            <AppButton onClick={toggleButton} btnActive={activeButton} variant="burger"></AppButton>
         )}
      </AnimatePresence>
   );
});

BurgerBtn.displayName = 'BurgerBtn';
export { BurgerBtn };
