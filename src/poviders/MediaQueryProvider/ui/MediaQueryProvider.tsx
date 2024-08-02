import type { PropsWithChildren } from 'react';
import { createContext } from 'react';
import { useMediaQuery } from 'react-responsive';

const queries = {
   pc: 1440,
   tablet: 992,
   mobile: 772,
   smallMobile: 410,
} as const;

const defaultContext = {
   isMax: false,
   isPc: false,
   isMobile: false,
   isTablet: false,
   isSmallMobile: false,
};

export const MediaQueryContext = createContext(defaultContext);

export const MediaQueryProvider = ({ children }: PropsWithChildren) => {
   const isMax = useMediaQuery({ minWidth: queries.pc });
   const isPc = useMediaQuery({ maxWidth: queries.pc });
   const isTablet = useMediaQuery({ maxWidth: queries.tablet });
   const isMobile = useMediaQuery({ maxWidth: queries.mobile });
   const isSmallMobile = useMediaQuery({ maxWidth: queries.smallMobile });

   const values = {
      isMax,
      isPc,
      isTablet,
      isMobile,
      isSmallMobile,
   };

   return <MediaQueryContext.Provider value={values}>{children}</MediaQueryContext.Provider>;
};
