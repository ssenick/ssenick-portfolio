import { useEffect } from 'react';

export const useVhVariable = (resize?: boolean) => {
   useEffect(() => {
      const setVhVariable = () => {
         const vh = window.innerHeight * 0.01;
         document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      setVhVariable();
      if (resize) {
         window.addEventListener('resize', setVhVariable);
         return () => {
            window.removeEventListener('resize', setVhVariable);
         };
      }
   }, [resize]);
};
