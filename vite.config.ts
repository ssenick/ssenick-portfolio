import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      svgr({
         svgrOptions: {
            icon: true,
         },
         include: '**/*.svg?react',
      }),
      react(),
   ],
   server: {
      strictPort: false,
      open: true,
      host: '0.0.0.0',
   },
   base: './',
   resolve: {
      alias: [{ find: '@', replacement: '/src' }],
   },
   define: {
      __IS_DEV__: JSON.stringify(true),
   },
});
