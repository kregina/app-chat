import '@components/Theme';
import { FC, Suspense, lazy, useEffect } from 'react';

import { useTheme } from '@components/Theme/useTheme';
import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { UserProvider } from '@store/contexts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/Home'));
const Lobby = lazy(() => import('./pages/Lobby/Lobby'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

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
              <Route path="/" element={<Home />} />
              <Route path="/lobby" element={<Lobby />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
};

