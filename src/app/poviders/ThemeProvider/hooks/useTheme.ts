import { useContext } from 'react';

import { THEME_LOCALSTORAGE_KEY } from '@/const/localstorage';

import type { Theme } from '../ui/ThemeContext';
import { ThemeContext, Themes } from '../ui/ThemeContext';

interface UseThemeResult {
   theme: Theme;
   toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
   const { theme, setTheme } = useContext(ThemeContext);

   const toggleTheme = () => {
      const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
      localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme);
      if (setTheme) {
         setTheme(newTheme);
      }
   };

   return {
      theme: theme ?? Themes.DARK,
      toggleTheme,
   };
}
