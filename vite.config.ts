import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ command }) => {
  // In development dev server ('serve'), use root '/' for preview in AI Studio & localhost:3000
  // When building ('build'), use the GitHub Pages repository base path '/Deutsch-House-Termiz/'
  // Can be customized via VITE_BASE_PATH environment variable
  const base = process.env.VITE_BASE_PATH ?? (command === 'serve' ? '/' : '/Deutsch-House-Termiz/');

  return {
  base: '/Deutsch-House-Termiz/',
  plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
