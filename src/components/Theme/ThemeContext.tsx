import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  ReactNode
} from 'react';

import { Theme } from '@store/enums';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const PREFERS_COLOR_SCHEME_DARK = '(prefers-color-scheme: dark)';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getSystemThemePreference = (): Theme =>
  window.matchMedia &&
  window.matchMedia(PREFERS_COLOR_SCHEME_DARK).matches ? Theme.Dark : Theme.Light;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getSystemThemePreference());

  useEffect(() => {
    const mediaQuery = window.matchMedia(PREFERS_COLOR_SCHEME_DARK);
    const handleChange = (event: MediaQueryListEvent) =>
      setTheme(event.matches ? Theme.Dark : Theme.Light);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;

    setTheme(newTheme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
