import type { PropsWithChildren } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import type { Theme } from '@/app/poviders/ThemeProvider/ui/ThemeContext';
import { Themes } from '@/app/poviders/ThemeProvider/ui/ThemeContext';
import { THEME_LOCALSTORAGE_KEY } from '@/const/localstorage';

import { ThemeContext } from './ThemeContext';

const getInitialTheme = (): Theme => {
   const storedTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme;
   return storedTheme || Themes.LIGHT;
};

interface ThemeProviderProps extends PropsWithChildren {
   initialTheme?: Theme;
}

const ThemeProvider = ({ initialTheme, children }: ThemeProviderProps) => {
   const [theme, setTheme] = useState<Theme>(initialTheme ?? getInitialTheme);
   const [darkMode, setDarkMode] = useState(false);

   const defaultValue = useMemo(
      () => ({
         theme,
         setTheme,
      }),
      [theme],
   );

   const handleMediaQueryChange = useCallback((event: MediaQueryListEvent) => {
      setDarkMode(event.matches);
   }, []);

   useEffect(() => {
      document.body.classList.remove(Themes.DARK, Themes.LIGHT);
      document.body.classList.add(theme);
      localStorage.setItem(THEME_LOCALSTORAGE_KEY, theme);
   }, [theme]);

   useEffect(() => {
      if (window.matchMedia) {
         const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

         // Set initial dark mode state
         setDarkMode(darkModeMediaQuery.matches);

         // Add event listener for changes
         darkModeMediaQuery.addEventListener('change', handleMediaQueryChange);

         return () => {
            darkModeMediaQuery.removeEventListener('change', handleMediaQueryChange);
         };
      }
   }, [handleMediaQueryChange]);

   useEffect(() => {
      if (darkMode && !localStorage.getItem(THEME_LOCALSTORAGE_KEY)) {
         setTheme(Themes.DARK);
      }
   }, [darkMode]);

   return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>;
};

ThemeProvider.displayName = 'ThemeProvider';
export { ThemeProvider };
