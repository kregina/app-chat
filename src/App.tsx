import '@components/Theme';
import { FC, Suspense, useEffect } from 'react';

import { useTheme } from '@components/Theme/useTheme';
import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { UserProvider } from '@store/contexts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ROUTES } from './config/routes/routes';

export const App: FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <UserProvider>
      <div className={theme}>
        <ThemeSwitcher />
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {ROUTES.map((route, index) => (
                <Route key={index} path={route.path} element={<route.component />} />
              ))}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
};

