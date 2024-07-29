// contoh konfigurasi vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // atau sesuaikan jika aplikasi Anda berada di subdirektori
});
