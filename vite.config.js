import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',
  server: {
    hmr: {
      overlay: false, // You can disable the overlay if you want
    },
  },
  build: {
    outDir: 'dist', // Ensure this is set to dist
  },
});
