import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/print-creator/' : '/',
  server: {
    host: '0.0.0.0',
    port: 5173,
    cors: true,
    allowedHosts: true,
    strictPort: false,
    open: true
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    cors: true,
    allowedHosts: true,
    open: true
  }
});