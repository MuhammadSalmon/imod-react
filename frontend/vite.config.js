import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Optional: Aliases for cleaner imports
    },
  },
  server: {
    open: true,
    port: 3000, // Change the dev server port if needed
    historyApiFallback: true, // Corrected typo
  },
  build: {
    outDir: 'dist', // Output directory for the production build
  },
});
