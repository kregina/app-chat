import '@components/Theme/global.css';
import '@components/Theme/dark.css';
import '@components/Theme/light.css';
import { Suspense, lazy, useEffect } from 'react';

import { useTheme } from "@components/Theme/useTheme";
import ThemeSwitcher from "@components/ThemeSwitcher/ThemeSwitcher";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Lobby = lazy(() => import('./pages/Lobby'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={theme}>
      <ThemeSwitcher />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lobby" element={<Lobby />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
