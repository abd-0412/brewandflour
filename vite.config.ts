import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          menu: path.resolve(__dirname, 'menu.html'),
          about: path.resolve(__dirname, 'about.html'),
          gallery: path.resolve(__dirname, 'gallery.html'),
          reserve: path.resolve(__dirname, 'reserve.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          order: path.resolve(__dirname, 'order.html'),
          blog: path.resolve(__dirname, 'blog.html'),
          nested404: path.resolve(__dirname, '404.html'),
        }
      }
    }
  };
});
