import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BACKEND_URL = process.env.VITE_API_URL || 'http://localhost:5000';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: BACKEND_URL,
        changeOrigin: true,
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
})
