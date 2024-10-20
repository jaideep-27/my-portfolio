import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // Add your repository name here
  build: {
    outDir: 'dist', // Ensure this is set to dist
  },
});
