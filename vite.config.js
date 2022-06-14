import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    svgr({ exportAsDefault: false })
  ],
  build: {
    outDir: 'build'
  },
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      Components: path.resolve(__dirname, './src/components'),
      Images: path.resolve(__dirname, './src/images')
    }
  }
});
