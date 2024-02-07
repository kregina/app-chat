import '@components/Theme/global.css';
import '@components/Theme/dark.css';
import '@components/Theme/light.css';
import { useEffect } from 'react';

import { useTheme } from "@components/Theme/useTheme";
import ThemeSwitcher from "@components/ThemeSwitcher/ThemeSwitcher";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={theme}>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
