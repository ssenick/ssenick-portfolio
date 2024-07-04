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

// ADD this style in fullscreen component

// height: calc(var(--vh, 1vh) * 100);
// will-change: height;
//
// @media (max-width: 772px) {
//    transition: height 0.2s;
// }
