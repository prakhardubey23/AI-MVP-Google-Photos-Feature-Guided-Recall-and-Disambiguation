import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

function copyPhotoDirectoriesPlugin(): Plugin {
  return {
    name: 'copy-photo-directories',
    closeBundle() {
      const photoDirs = [
        '201412_a', '201705_a', '202001_a', '202004_a',
        '202007_a', '202106_a', '202110_a', '202202_a',
        '202211_a', '202212_a', '202303_a', '202308_a'
      ];
      const distDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(distDir)) return;

      for (const dir of photoDirs) {
        const srcDir = path.resolve(__dirname, dir);
        const targetDir = path.resolve(distDir, dir);
        if (fs.existsSync(srcDir)) {
          fs.cpSync(srcDir, targetDir, { recursive: true, force: true });
        }
      }
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), copyPhotoDirectoriesPlugin()],
  server: {
    port: 5173,
    host: true,
    fs: {
      allow: ['.']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});

