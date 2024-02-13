import React from 'react';

import { ThemeProvider } from '@components/Theme/ThemeContext.tsx';
import { AppProvider } from '@store/contexts';
import ReactDOM from 'react-dom/client';

import { App } from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>,
);
