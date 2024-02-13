import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  ReactNode
} from 'react';

import { ThemeEnum } from '@store/enums';

type ThemeContextType = {
  theme: ThemeEnum;
  setTheme: (theme: ThemeEnum) => void;
  toggleTheme: () => void;
};

const PREFERS_COLOR_SCHEME_DARK = '(prefers-color-scheme: dark)';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getSystemThemePreference = (): ThemeEnum =>
  window.matchMedia &&
  window.matchMedia(PREFERS_COLOR_SCHEME_DARK).matches ? ThemeEnum.Dark : ThemeEnum.Light;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeEnum>(getSystemThemePreference());

  useEffect(() => {
    const mediaQuery = window.matchMedia(PREFERS_COLOR_SCHEME_DARK);
    const handleChange = (event: MediaQueryListEvent) =>
      setTheme(event.matches ? ThemeEnum.Dark : ThemeEnum.Light);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light;

    setTheme(newTheme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
