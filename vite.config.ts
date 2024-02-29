import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3003,
  },
  plugins: [react()],
  // base: '/kyc-onboarding',
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@api': path.resolve(__dirname, './src/api'),
      '@components': path.resolve(__dirname, './src/components'),
      '@configs': path.resolve(__dirname, './src/configs'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@services': path.resolve(__dirname, './src/services'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@routes': path.resolve(__dirname, './src/routes'),
    },
  },
});
