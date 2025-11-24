import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'  // ✅ new import

export default defineConfig({
  plugins: [
    react()
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),       // call the plugin
        require('autoprefixer')
      ]
    }
  }
})
