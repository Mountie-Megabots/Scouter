import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dash: resolve(__dirname, 'dashboard.html'),
        teams: resolve(__dirname, '/dashboard/teams.html'),
        matches: resolve(__dirname, '/dashboard/matches.html'),
        settings: resolve(__dirname, '/dashboard/settings.html'),
        addcomp: resolve(__dirname, '/dashboard/addcomp.html'),
        pitscout: resolve(__dirname, '/dashboard/teams/pitscout.html'),
      },
    },
  },
})

