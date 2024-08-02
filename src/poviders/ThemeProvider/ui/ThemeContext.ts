import { createContext } from 'react';

export const Themes = {
   LIGHT: 'light',
   DARK: 'dark',
} as const;

export type Theme = (typeof Themes)[keyof typeof Themes];

interface ThemeContextProps {
   theme?: Theme;
   setTheme?: (them: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
