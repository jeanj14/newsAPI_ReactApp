import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@app": resolve("src"),
      "@assets": resolve("src/assets"),
      "@components": resolve("src/components"),
      "@header": resolve("src/components/Header"),
      "@footer": resolve("src/components/Footer"),
      "@articles": resolve("src/components/Articles"),
      "@pages": resolve("src/pages"),
      "@api": resolve("src/api"),
      // "@store": resolve("src/store"),
      // "@ui": resolve("src/ui"),
      // "@utils": resolve("src/utils"),
    },
  
  },
})
