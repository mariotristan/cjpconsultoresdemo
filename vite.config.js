import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://mariotristan.github.io/cjpconsultoresdemo' // Cambia esto si tu repo tiene otro nombre
})
