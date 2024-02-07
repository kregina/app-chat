import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import postcssNesting from 'postcss-nesting';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@utils': resolve(__dirname, './src/utils'),
    },
  },
  server: {
    host: true,
    port: 3000,
  },
  css: {
    postcss: {
      plugins: [
        postcssNesting
      ],
    },
  },
});
