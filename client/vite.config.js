import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const enableReactRefresh = false 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    origin: 'http://localhost:8080',
  }
 
  
  
})
