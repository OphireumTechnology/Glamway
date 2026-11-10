import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => ({
  base: process.env.GITHUB_PAGES === 'true' ? '/Glamway/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: { alias: { '@': path.resolve(import.meta.dirname ?? '.', '.') } },
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: false,
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
}));
