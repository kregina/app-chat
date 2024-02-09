import React from 'react';

import { ThemeProvider } from '@components/Theme/ThemeContext.tsx';
import ReactDOM from 'react-dom/client';

import { App } from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
