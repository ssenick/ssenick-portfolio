import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
   plugins: [
      svgr({
         svgrOptions: {
            icon: true,
         },
         include: '**/*.svg?react',
      }),
      react(),
      visualizer({
         open: true, // Открывает отчет автоматически после сборки
         filename: 'bundle-analysis.html', // Имя выходного файла с отчетом
         gzipSize: true, // Показывает сжатые размеры
         brotliSize: true, // Показывает размеры brotli
      }),
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
      __IS_DEV__: 'import.meta.env.DEV',
   },
   esbuild: {
      treeShaking: true,
   },
});
