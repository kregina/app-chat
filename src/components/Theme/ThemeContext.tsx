import { createContext, useState, useEffect, useMemo, ReactNode } from 'react';

import { Theme } from '@utils/enuns';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const PREFERS_COLOR_SCHEME_DARK = '(prefers-color-scheme: dark)';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getSystemThemePreference = (): Theme => {
  return window.matchMedia && window.matchMedia(PREFERS_COLOR_SCHEME_DARK).matches
    ? Theme.Dark
    : Theme.Light;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getSystemThemePreference());

  useEffect(() => {
    const mediaQuery = window.matchMedia(PREFERS_COLOR_SCHEME_DARK);

    const handleChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? Theme.Dark : Theme.Light);
    };

    mediaQuery.addEventListener('change', handleChange);

    setTheme(getSystemThemePreference());

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const value = useMemo(() => {
    const toggleTheme = () => {
      setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
    };

    return { theme, setTheme, toggleTheme };
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
