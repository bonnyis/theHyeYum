import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
const __dirname = path.resolve();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['swiper'], // Swiper를 명시적으로 포함
  },
  resolve: {
    alias: [
      {find: "@", replacement: path.join(__dirname, "src")},
      {find: "@img", replacement: path.join(__dirname, "src/assets/img")},
    ]
  },
})
